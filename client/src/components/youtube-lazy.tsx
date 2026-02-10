import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface YouTubeLazyProps {
  videoId: string;
  title: string;
  className?: string;
  params?: string;
  thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
}

export default function YouTubeLazy({ 
  videoId, 
  title, 
  className = '', 
  params = '',
  thumbnailQuality = 'hqdefault',
}: YouTubeLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}${params.includes('autoplay') ? '' : '&autoplay=1'}`}
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
      className={`relative cursor-pointer group ${className}`}
      onClick={() => setIsLoaded(true)}
      role="button"
      tabIndex={0}
      aria-label={`Reproducir video: ${title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsLoaded(true); } }}
    >
      <img 
        src={thumbnailUrl} 
        alt={title}
        loading="lazy"
        width={480}
        height={360}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>
    </div>
  );
}
