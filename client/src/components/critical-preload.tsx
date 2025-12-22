import { useEffect } from 'react';

export default function CriticalPreload() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.fetchPriority = 'high';
    link.type = 'image/webp';
    
    const heroImg = document.querySelector('img[alt*="Video corporativo"], img[alt*="TRANSERVICA"]') as HTMLImageElement;
    if (heroImg && heroImg.src) {
      link.href = heroImg.src;
      document.head.appendChild(link);
    }
  }, []);
  
  return null;
}
