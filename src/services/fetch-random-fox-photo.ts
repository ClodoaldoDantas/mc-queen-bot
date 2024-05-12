import axios from 'axios'

interface FetchRandomFoxPhotoResponse {
  image: string
}

/**
 * Fetch a random fox photo from the API
 * @see {@link https://randomfox.ca/}
 */
export async function fetchRandomFoxPhoto(): Promise<FetchRandomFoxPhotoResponse> {
  const response = await axios.get('https://randomfox.ca/floof/')
  return response.data
}
