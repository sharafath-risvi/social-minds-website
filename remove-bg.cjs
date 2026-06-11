const { Jimp } = require('jimp');

async function processImage() {
  const image = await Jimp.read('/Users/sharafath.risviicloud.com/.gemini/antigravity-ide/brain/de99ceec-d64e-4a5f-87cd-ca9d89ae0d95/premium_3d_hand_phone_1781177185224.png');
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Check for white background (pure white or very close)
    if (r > 230 && g > 230 && b > 230) {
      this.bitmap.data[idx + 3] = 0; // Transparent
    }
    
    // Check for green screen (green is dominant)
    // The green is #00FF00 but with shading, so green is much higher than R and B
    if (g > 60 && g > r * 1.4 && g > b * 1.4) {
      this.bitmap.data[idx + 3] = 0; // Transparent
    }
  });

  await image.write('public/about/perfect-hand-grip.png');
  console.log('Done creating perfect-hand-grip.png');
}

processImage().catch(console.error);
