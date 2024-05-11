import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { fetchRandomQuote } from './services/fetch-random-quote'

const token = process.env.TELEGRAM_BOT_API as string
const bot = new TelegramBot(token, { polling: true })

/* Start Bot */
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Katchau ⚡️')
})

/* Send Quote */
bot.onText(/\/quote/, async (msg) => {
  const quote = await fetchRandomQuote()
  bot.sendMessage(msg.chat.id, quote.content)
})
