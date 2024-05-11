import axios from 'axios'

interface FetchRandomJokeResponse {
  id: string
  joke: string
  status: number
}

/**
 * Fetch a random joke from the icanhazdadjoke API
 * @see {@link https://icanhazdadjoke.com/api}
 */
export async function fetchRandomJoke(): Promise<FetchRandomJokeResponse> {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })

  return response.data
}
