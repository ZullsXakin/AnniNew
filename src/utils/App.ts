import { config } from "dotenv"
import { dirname, resolve } from "path"

config({ path: resolve(__dirname, "..", ".env") })

import "./client"
