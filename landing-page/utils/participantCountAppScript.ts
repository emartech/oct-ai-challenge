// Google Apps Script integration for participant count
// This replaces the iframe with a clean fetch to your Apps Script web app

interface ParticipantCountResponse {
  count: number;
  lastUpdated: string;
  status: 'success' | 'error';
  error?: string;
}

// Replace this with your actual Google Apps Script web app URL
const WEB_APP_URL = 'https://script.google.com/a/macros/emarsys.com/s/AKfycbwshMg4DGPU6vyf7tNyGtpqRyNYIGTv9e2rVUuMvxK5iXt8p_W24vlP1_TbmSTT0xA/exec';

export async function fetchParticipantCountFromAppScript(): Promise<number> {
  // If no URL configured, return 0
  if (!WEB_APP_URL) {
    console.warn('Google Apps Script URL not configured');
    return 0;
  }

  return new Promise((resolve) => {
    try {
      // Create a unique callback name
      const callbackName = `jsonpCallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Create the script element for JSONP
      const script = document.createElement('script');
      const url = new URL(WEB_APP_URL);
      url.searchParams.set('callback', callbackName);
      script.src = url.toString();
      
      // Set up the callback function
      (window as any)[callbackName] = (data: ParticipantCountResponse) => {
        // Clean up
        document.head.removeChild(script);
        delete (window as any)[callbackName];
        
        if (data.status === 'success') {
          resolve(data.count);
        } else {
          console.error('Error from Apps Script:', data.error);
          resolve(0);
        }
      };
      
      // Handle script load errors
      script.onerror = () => {
        console.error('Failed to load Apps Script');
        document.head.removeChild(script);
        delete (window as any)[callbackName];
        resolve(0);
      };
      
      // Add script to DOM to trigger the request
      document.head.appendChild(script);
      
    } catch (error) {
      console.error('Failed to fetch participant count from Apps Script:', error);
      resolve(0);
    }
  });
}

// Cache implementation
let cachedCount: number | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes (shorter than Apps Script natural caching)

export async function getCachedParticipantCountFromAppScript(): Promise<number> {
  const now = Date.now();
  
  // Return cached value if still valid
  if (cachedCount !== null && now - cacheTimestamp < CACHE_DURATION) {
    return cachedCount;
  }
  
  // Fetch new value
  const count = await fetchParticipantCountFromAppScript();
  cachedCount = count;
  cacheTimestamp = now;
  
  return count;
}