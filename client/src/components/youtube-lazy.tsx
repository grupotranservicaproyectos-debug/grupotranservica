import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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
}: YouTubeLazyProps) {
  return (
    <div className={className}>
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        params={params}
        poster="hqdefault"
        webp={true}
        noCookie={true}
      />
    </div>
  );
}

export function BlogVideoEmbed({ postId, title }: { postId: number; title: string }) {
  const videoMap: Record<number, { id: string; params: string }> = {
    1: { id: 'JnWnFe_QdnE', params: 'autoplay=1&mute=1&loop=1&playlist=JnWnFe_QdnE' },
    2: { id: '4ZfZ5YFelkQ', params: 'autoplay=1&mute=1&loop=1&playlist=4ZfZ5YFelkQ' },
    3: { id: '44lpgBO22qU', params: 'autoplay=1&mute=1&loop=1&playlist=44lpgBO22qU' },
    4: { id: '54hazc90eNk', params: 'autoplay=1&mute=1&loop=1&playlist=54hazc90eNk' },
    7: { id: 'NW9Huszovqw', params: 'autoplay=1&start=30&end=171&mute=1&loop=1&playlist=NW9Huszovqw' },
    8: { id: 'JJjJ6lF_4oI', params: 'autoplay=1&start=22&end=86&mute=1&loop=1&playlist=JJjJ6lF_4oI' },
  };

  const video = videoMap[postId];
  if (!video) return null;

  return (
    <LiteYouTubeEmbed
      id={video.id}
      title={title}
      params={video.params}
      poster="hqdefault"
      webp={true}
      noCookie={true}
    />
  );
}
