import { Keys } from "../types/Keys"

const Keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? "nil",
}

if (Object.values(Keys).includes("nil")) {
  throw new Error("Отсутствует один или несколько ключей.")
}

export default Keys
