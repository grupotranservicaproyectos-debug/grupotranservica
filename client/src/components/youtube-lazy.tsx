import { useState } from 'react';
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
  thumbnailQuality = 'hqdefault'
}: YouTubeLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1${params ? '&' + params : ''}`}
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
      className={`relative cursor-pointer group ${className}`}
      onClick={() => setIsLoaded(true)}
      data-testid={`youtube-lazy-${videoId}`}
    >
      <img 
        src={thumbnailUrl} 
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>
    </div>
  );
}
