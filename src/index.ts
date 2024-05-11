import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { fetchRandomQuote } from './services/fetch-random-quote'
import { fetchRandomJoke } from './services/fetch-random-joke'

const token = process.env.TELEGRAM_BOT_API as string
const bot = new TelegramBot(token, { polling: true })

/* Start Bot */
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Katchau ⚡️')
})

/* Help */
bot.onText(/\/help/, (msg) => {
  const message = `
  🚗💨 Available commands:
  /quote - Get a random quote
  /joke - Get a random joke
  /start - Start the bot
  /help - Display this help message
  `

  bot.sendMessage(msg.chat.id, message)
})

/* Send Quote */
bot.onText(/\/quote/, async (msg) => {
  const quote = await fetchRandomQuote()
  bot.sendMessage(msg.chat.id, quote.content)
})

/* Send Joke */
bot.onText(/\/joke/, async (msg) => {
  const data = await fetchRandomJoke()
  bot.sendMessage(msg.chat.id, data.joke)
})
