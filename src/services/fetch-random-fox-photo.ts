import axios from 'axios'

interface FetchRandomFoxPhotoResponse {
  image: string
}

/**
 * Fetch a random fox photo from the API
 * @see {@link https://randomfox.ca/}
 */
export async function fetchRandomFoxPhoto(): Promise<FetchRandomFoxPhotoResponse> {
  const response = await axios.get('https://fox.ceo/api/breeds/image/random')
  return response.data
}
