import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface YouTubeLazyProps {
  videoId: string;
  title: string;
  className?: string;
  params?: string;
  thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
  autoLoad?: boolean;
}

export default function YouTubeLazy({ 
  videoId, 
  title, 
  className = '', 
  params = '',
  thumbnailQuality = 'hqdefault',
  autoLoad = false
}: YouTubeLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  useEffect(() => {
    if (!autoLoad || isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.25, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [autoLoad, isLoaded]);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${params}${params.includes('autoplay') ? '' : '&autoplay=1'}`}
        title={title}
        className={className}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative ${!autoLoad ? 'cursor-pointer' : ''} group ${className}`}
      onClick={() => !autoLoad && setIsLoaded(true)}
      onKeyDown={(e) => !autoLoad && e.key === 'Enter' && setIsLoaded(true)}
      tabIndex={!autoLoad ? 0 : undefined}
      role={!autoLoad ? 'button' : undefined}
      aria-label={!autoLoad ? `Reproducir video: ${title}` : undefined}
      data-testid={`youtube-lazy-${videoId}`}
    >
      <img 
        src={thumbnailUrl} 
        alt={title}
        loading="lazy"
        width={640}
        height={360}
        decoding="async"
        className="w-full h-full object-cover"
        style={{ aspectRatio: '16/9' }}
      />
      {!autoLoad && (
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="w-12 h-12 text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
}
