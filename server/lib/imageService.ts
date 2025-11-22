interface ImageResult {
  url: string;
  photographer?: string;
  photographerUrl?: string;
  alt?: string;
}

export async function searchImages(query: string, count: number = 3): Promise<string[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  
  if (!apiKey) {
    console.warn('PEXELS_API_KEY not configured, skipping image search');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          'Authorization': apiKey
        }
      }
    );

    if (!response.ok) {
      console.error(`Pexels API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.photos || data.photos.length === 0) {
      console.warn(`No images found for query: ${query}`);
      return [];
    }

    return data.photos.map((photo: any) => photo.src.large2x || photo.src.large);
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
}

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=630&fit=crop',
];

export async function getBlogImages(city: string, sector: string): Promise<{ coverImage: string; secondaryImages: string[] }> {
  const queries = [
    `${sector} transport Venezuela heavy equipment`,
    `industrial crane mobile truck logistics`,
    `heavy machinery construction transport`
  ];

  const allImages: string[] = [];

  for (const query of queries) {
    const images = await searchImages(query, 1);
    if (images.length > 0) {
      allImages.push(images[0]);
    }
    if (allImages.length >= 3) break;
  }

  if (allImages.length === 0) {
    const fallback = await searchImages('heavy equipment transport truck', 3);
    allImages.push(...fallback);
  }

  while (allImages.length < 3) {
    allImages.push(FALLBACK_IMAGES[allImages.length % FALLBACK_IMAGES.length]);
  }

  return {
    coverImage: allImages[0],
    secondaryImages: [allImages[1], allImages[2]]
  };
}
