import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'sbpt4nr4',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-05-01', // use current date (YYYY-MM-DD) to target the latest API version
});

// Configure the image builder
const builder = imageUrlBuilder(client);

// Helper function to easily generate image URLs
export function urlFor(source) {
  return builder.image(source);
}
