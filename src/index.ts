import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { env } from './config/env'
import { fetchRandomDogPhoto } from './services/fetch-random-dog-photo'
import { fetchRandomFoxPhoto } from './services/fetch-random-fox-photo'
import { fetchRandomJoke } from './services/fetch-random-joke'
import { fetchRandomQuote } from './services/fetch-random-quote'
import { commands } from './utils/commands'
import { messages } from './utils/messages'

const token = env.TELEGRAM_BOT_API
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

/* Send Dog Photo */
bot.onText(commands.dog, async (msg) => {
  const data = await fetchRandomDogPhoto()

  if (data.status === 'success') {
    bot.sendPhoto(msg.chat.id, data.message)
  }
})

/* Send Fox Photo */
bot.onText(commands.dog, async (msg) => {
  const data = await fetchRandomFoxPhoto()
  bot.sendPhoto(msg.chat.id, data.image)
})
