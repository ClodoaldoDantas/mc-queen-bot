import axios from 'axios'

interface FetchRandomDogPhotoResponse {
  message: string
  status: string
}

/**
 * Fetch a random dog photo from the dog.ceo API
 * @see {@link https://dog.ceo/dog-api/}
 */
export async function fetchRandomDogPhoto(): Promise<FetchRandomDogPhotoResponse> {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  return response.data
}
