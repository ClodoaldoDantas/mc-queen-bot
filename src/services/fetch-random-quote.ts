import axios from 'axios'

interface FetchRandomQuoteResponse {
  _id: string
  content: string
}

/**
 * Fetch a random quote from the Quotable API
 * @see {@link https://github.com/lukePeavey/quotable}
 */
export async function fetchRandomQuote(): Promise<FetchRandomQuoteResponse> {
  const response = await axios.get('https://api.quotable.io/quotes/random')
  const quote = response.data[0]

  return quote
}
