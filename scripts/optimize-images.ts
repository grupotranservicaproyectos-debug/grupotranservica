import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './attached_assets';
const OUTPUT_DIR = './attached_assets/optimized';
const QUALITY = 50;
const SIZES = [320, 640, 1024, 1920];

async function optimizeImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(ASSETS_DIR).filter(f => 
    f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
  );

  console.log(`Found ${files.length} images to optimize`);

  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      // Create optimized WebP at original size
      await sharp(inputPath)
        .webp({ quality: QUALITY })
        .toFile(path.join(OUTPUT_DIR, `${baseName}.webp`));
      
      // Create responsive sizes
      for (const width of SIZES) {
        if (metadata.width && metadata.width >= width) {
          await sharp(inputPath)
            .resize(width)
            .webp({ quality: QUALITY })
            .toFile(path.join(OUTPUT_DIR, `${baseName}-${width}w.webp`));
        }
      }
      
      console.log(`✓ Optimized: ${file}`);
    } catch (err) {
      console.error(`✗ Error optimizing ${file}:`, err);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();
