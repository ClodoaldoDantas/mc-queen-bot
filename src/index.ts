import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { fetchRandomQuote } from './services/fetch-random-quote'
import { fetchRandomJoke } from './services/fetch-random-joke'
import { messages } from './utils/messages'
import { commands } from './utils/commands'

const token = process.env.TELEGRAM_BOT_API as string
const bot = new TelegramBot(token, { polling: true })

/* Start Bot */
bot.onText(commands.start, (msg) => {
  bot.sendMessage(msg.chat.id, messages.start)
})

/* Help */
bot.onText(commands.help, (msg) => {
  bot.sendMessage(msg.chat.id, messages.help)
})

/* Send Quote */
bot.onText(commands.quote, async (msg) => {
  const quote = await fetchRandomQuote()
  bot.sendMessage(msg.chat.id, quote.content)
})

/* Send Joke */
bot.onText(commands.joke, async (msg) => {
  const data = await fetchRandomJoke()
  bot.sendMessage(msg.chat.id, data.joke)
})
