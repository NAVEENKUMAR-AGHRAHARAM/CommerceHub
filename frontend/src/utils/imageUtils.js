import { BASE_URL } from '../constants';

/**
 * Normalizes image paths to ensure they load correctly from the backend or external sources.
 * @param {string} imagePath - The path or URL of the image from the database.
 * @returns {string} - The corrected full URL for the image.
 */
export const getCorrectImageUrl = (imagePath) => {
  if (!imagePath) return 'https://placehold.co/600x400?text=Product+Image';

  // If it's already a full URL (http/https), return it as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Ensure BASE_URL doesn't have a trailing slash and imagePath starts with a slash
  const baseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  return `${baseUrl}${path}`;
};

/**
 * Error handler for broken images.
 * @param {object} e - React Synthetic Event.
 */
export const handleImageError = (e) => {
  e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
};
