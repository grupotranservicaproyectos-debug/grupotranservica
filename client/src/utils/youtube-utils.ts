/**
 * Utilidades para optimizar la calidad de videos de YouTube a 1080p HD
 * 
 * Funciones disponibles:
 * - ensureYouTube1080p(url): Normaliza una URL individual
 * - injectYouTube1080pGlobally(): Actualiza todos los iframes de YouTube en la página
 * - useYouTube1080p(url): Hook para componentes React
 */

import { useEffect, useState } from 'react';

const YOUTUBE_1080P_PARAMS = {
  vq: 'hd1080',
  quality: 'hd1080',
  hd: '1',
  fmt: '22',
  iv_load_policy: '3',
  modestbranding: '1',
  rel: '0',
  showinfo: '0',
};

export function ensureYouTube1080p(url: string): string {
  if (!url) return url;
  
  try {
    const urlObj = new URL(url);
    
    if (!urlObj.hostname.includes('youtube.com') && !urlObj.hostname.includes('youtu.be')) {
      return url;
    }

    Object.entries(YOUTUBE_1080P_PARAMS).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });

    return urlObj.toString();
  } catch {
    return url;
  }
}

export function injectYouTube1080pGlobally(): void {
  const iframes = document.querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube"]');
  
  iframes.forEach((iframe) => {
    const currentSrc = iframe.getAttribute('src');
    if (currentSrc) {
      const optimizedSrc = ensureYouTube1080p(currentSrc);
      if (optimizedSrc !== currentSrc) {
        iframe.setAttribute('src', optimizedSrc);
      }
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          const newIframes = node.querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube"]');
          newIframes.forEach((iframe) => {
            const currentSrc = iframe.getAttribute('src');
            if (currentSrc) {
              const optimizedSrc = ensureYouTube1080p(currentSrc);
              if (optimizedSrc !== currentSrc) {
                iframe.setAttribute('src', optimizedSrc);
              }
            }
          });

          if (node.tagName === 'IFRAME' && node.getAttribute('src')?.includes('youtube')) {
            const currentSrc = node.getAttribute('src');
            if (currentSrc) {
              const optimizedSrc = ensureYouTube1080p(currentSrc);
              if (optimizedSrc !== currentSrc) {
                node.setAttribute('src', optimizedSrc);
              }
            }
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function useYouTube1080p(url: string): string {
  const [optimizedUrl, setOptimizedUrl] = useState<string>(() => ensureYouTube1080p(url));

  useEffect(() => {
    setOptimizedUrl(ensureYouTube1080p(url));
  }, [url]);

  return optimizedUrl;
}
