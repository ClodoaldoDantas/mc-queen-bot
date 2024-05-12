import axios from 'axios'
import { env } from '../config/env'

interface FetchCurrentWeatherResponse {
  main: {
    temp: number
  }
}

/**
 * Fetch the current weather from the OpenWeatherMap API
 * @see {@link https://openweathermap.org/}
 */
export async function fetchCurrentWeather(): Promise<FetchCurrentWeatherResponse> {
  const api_url = 'https://api.openweathermap.org/data/2.5/weather'

  const response = await axios.get(api_url, {
    params: {
      lat: -3.71839,
      lon: -38.5434,
      units: 'metric',
      appid: env.OPEN_WEATHER_API_KEY,
    },
  })

  return response.data
}
