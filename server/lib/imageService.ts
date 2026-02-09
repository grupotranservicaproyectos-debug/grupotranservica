interface ImageResult {
  url: string;
  photographer?: string;
  photographerUrl?: string;
  alt?: string;
}

async function searchPexels(query: string, count: number): Promise<string[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  
  if (!apiKey) {
    console.warn('PEXELS_API_KEY not configured, skipping Pexels');
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
      console.warn(`No Pexels images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.photos.length} images from Pexels for "${query}"`);
    return data.photos.map((photo: any) => photo.src.large2x || photo.src.large);
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
}

async function searchFreepik(query: string, count: number): Promise<string[]> {
  const apiKey = process.env.FREEPIK_API_KEY;
  
  if (!apiKey) {
    console.warn('FREEPIK_API_KEY not configured, skipping Freepik');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.freepik.com/v1/resources?term=${searchQuery}&limit=${count}&filters[content_type]=photo&filters[orientation]=landscape`,
      {
        headers: {
          'x-freepik-api-key': apiKey,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`Freepik API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      console.warn(`No Freepik images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.data.length} images from Freepik for "${query}"`);
    return data.data.map((item: any) => item.image?.source?.url || item.thumbnail?.url).filter(Boolean);
  } catch (error) {
    console.error('Error fetching images from Freepik:', error);
    return [];
  }
}

async function searchShutterstock(query: string, count: number): Promise<string[]> {
  const consumerKey = process.env.SHUTTERSTOCK_CONSUMER_KEY;
  const consumerSecret = process.env.SHUTTERSTOCK_CONSUMER_SECRET;
  
  if (!consumerKey || !consumerSecret) {
    console.warn('SHUTTERSTOCK credentials not configured, skipping Shutterstock');
    return [];
  }

  try {
    const searchQuery = encodeURIComponent(query);
    const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    
    const response = await fetch(
      `https://api.shutterstock.com/v2/images/search?query=${searchQuery}&per_page=${count}&orientation=horizontal&image_type=photo`,
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`Shutterstock API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      console.warn(`No Shutterstock images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.data.length} images from Shutterstock for "${query}"`);
    return data.data.map((item: any) => item.assets?.preview?.url || item.assets?.small_thumb?.url).filter(Boolean);
  } catch (error) {
    console.error('Error fetching images from Shutterstock:', error);
    return [];
  }
}

async function searchUnsplash(query: string, count: number): Promise<string[]> {
  try {
    const searchQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=${count}&orientation=landscape&client_id=demo`,
      {
        headers: {
          'Accept-Version': 'v1'
        }
      }
    );

    if (!response.ok) {
      console.error(`Unsplash API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      console.warn(`No Unsplash images found for query: ${query}`);
      return [];
    }

    console.log(`✅ Found ${data.results.length} images from Unsplash for "${query}"`);
    return data.results.map((photo: any) => photo.urls.regular);
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
}

export async function searchImages(query: string, count: number = 3): Promise<string[]> {
  console.log(`🔍 Searching for ${count} images with query: "${query}"`);
  
  // Try providers in order: Pexels → Freepik → Shutterstock → Unsplash
  const providers = [
    { name: 'Pexels', fn: searchPexels },
    { name: 'Freepik', fn: searchFreepik },
    { name: 'Shutterstock', fn: searchShutterstock },
    { name: 'Unsplash', fn: searchUnsplash }
  ];

  for (const provider of providers) {
    const images = await provider.fn(query, count);
    if (images.length >= count) {
      console.log(`✅ Using ${images.length} images from ${provider.name}`);
      return images.slice(0, count);
    } else if (images.length > 0) {
      console.log(`⚠️ ${provider.name} returned only ${images.length}/${count} images, trying next provider`);
    }
  }

  console.warn(`⚠️ All providers failed for query "${query}", using fallback images`);
  return [];
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
