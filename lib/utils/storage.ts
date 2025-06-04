import { storage } from '@/lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

// Cache for download URLs to avoid unnecessary requests
const urlCache = new Map<string, string>();

export async function getImageUrl(path: string): Promise<string> {
  // Check cache first
  if (urlCache.has(path)) {
    return urlCache.get(path)!;
  }

  try {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    // Store in cache
    urlCache.set(path, url);
    return url;
  } catch (error) {
    console.error('Error getting image URL:', error);
    throw error;
  }
}

// Predefined image paths
export const STORAGE_PATHS = {
  // Brand assets
  logo: 'Logo/Gemini_Generated_Image_ku5fqiku5fqiku5f.jpeg',
  
  // Login assets
  loginBackground: 'Login/Gemini_Generated_Image_up2hy2up2hy2up2h.jpeg',
  gmailLogo: 'Login/google-logo.png',
  userIcons: [
    'Login/alvito-danendra-j92WHR-KZnM-unsplash.jpg',
    'Login/april-laugh-ng6R1DHtC3M-unsplash.jpg',
    'Login/ariungoo-batzorig-1_Y9Gp3dUEQ-unsplash.jpg',
    'Login/jim-sung-OfB4rWCnbg4-unsplash.jpg',
    'Login/quino-al-RAd1nIVB3_Y-unsplash.jpg',
    'Login/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg',
  ],
  workoutImages: [
    'images/login/workout1.jpg',
    'images/login/workout2.jpg',
    'images/login/workout3.jpg',
    'images/login/workout4.jpg',
    'images/login/workout5.jpg',
    'images/login/workout6.jpg',
  ]
}; 