import axios from 'axios'

interface FetchRandomQuoteResponse {
  _id: string
  content: string
}

export async function fetchRandomQuote(): Promise<FetchRandomQuoteResponse> {
  const response = await axios.get('https://api.quotable.io/quotes/random')
  const quote = response.data[0]

  return quote
}
