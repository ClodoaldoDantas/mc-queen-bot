import axios from 'axios'

interface FetchRandomAdviceResponse {
  slip: {
    id: number
    advice: string
  }
}

/**
 * Fetch a random advice from the Advice Slip API
 * @see {@link https://api.adviceslip.com/}
 */
export async function fetchRandomAdvice(): Promise<FetchRandomAdviceResponse> {
  const response = await axios.get('https://api.adviceslip.com/advice')
  return response.data
}
