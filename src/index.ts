import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_BOT_API as string
const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Katchau ⚡️')
})
