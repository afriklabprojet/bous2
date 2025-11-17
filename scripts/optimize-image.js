const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/maple-wood.jpg');
const outputPath = path.join(__dirname, '../public/images/maple-wood-optimized.jpg');

console.log('Optimizing maple-wood.jpg...');

sharp(inputPath)
  .resize(800, 600, {
    fit: 'cover',
    position: 'center'
  })
  .jpeg({
    quality: 85,
    progressive: true
  })
  .toFile(outputPath)
  .then(info => {
    console.log('✅ Image optimized successfully!');
    console.log('Original size:', fs.statSync(inputPath).size, 'bytes');
    console.log('Optimized size:', info.size, 'bytes');
    console.log('Savings:', ((1 - info.size / fs.statSync(inputPath).size) * 100).toFixed(1) + '%');
    
    // Remplacer l'original par la version optimisée
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    console.log('✅ Original file replaced with optimized version');
  })
  .catch(err => {
    console.error('❌ Error optimizing image:', err);
  });
