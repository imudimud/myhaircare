import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'logo192.png' },
  { size: 512, name: 'logo512.png' },
];

async function generateIcons() {
  const inputSvg = join(__dirname, '../public/logo.svg');
  
  try {
    // Generate PNG icons
    for (const { size, name } of sizes) {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(join(__dirname, '../public', name));
      console.log(`✓ Generated ${name}`);
    }

    // Use the 32x32 PNG as favicon.ico
    await fs.copyFile(
      join(__dirname, '../public/favicon-32x32.png'),
      join(__dirname, '../public/favicon.ico')
    );
    console.log('✓ Generated favicon.ico');

    console.log('\n✨ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
