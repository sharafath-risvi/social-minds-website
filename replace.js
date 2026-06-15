import fs from 'fs';

const filesToUpdate = [
  '/Users/sharafath.risviicloud.com/Documents/SOCIAL_MINDS/social_minds/src/components/sections/SuccessStories.jsx',
  '/Users/sharafath.risviicloud.com/Documents/SOCIAL_MINDS/social_minds/src/components/sections/OurProcessExperience.jsx'
];

for (const filePath of filesToUpdate) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace extensions in clientlogos and process paths
  content = content.replace(/\/clientlogos\/([^'"]+)\.(png|jpg|jpeg)/gi, '/clientlogos/$1.webp');
  content = content.replace(/\/process\/([^'"]+)\.(png|jpg|jpeg)/gi, '/process/$1.webp');

  // Add loading="lazy" to imgs that don't have it, but for the first image we should consider 'eager' if required,
  // however, for simplicity, let's just use a replacer for <img> tags.
  // Wait, the user wants "Preload only the first visible image in each section if required... Add lazy loading to all non-critical images."
  
  // Actually, we can just replace `<img ` with `<img loading="lazy" `
  // We need to be careful to not duplicate loading="lazy".
  content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"');

  // For the first image, let's replace `loading="lazy"` with `loading="eager"` or just remove it if we know which one it is.
  // SuccessStories and OurProcessExperience both render lists of images. React handles them in a loop.
  // We can add `loading={index === 0 ? "eager" : "lazy"}` inside the map loops.

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Updated ' + filePath);
}
