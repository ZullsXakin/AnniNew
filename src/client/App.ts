import { Client, GatewayIntentBits } from "discord.js"
import Keys from "../keys/App"

const app = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ],
})

app.login(Keys.clientToken)
  .catch((err) => {
    console.error("Ошибка при запуске бота:", err)
    process.exit(1)
  })