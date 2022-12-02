import { connect } from 'mongoose'
import mongoose from 'mongoose'
import Logger from 'bunyan'
import { config } from './config'

const log: Logger = config.createLogger('database')
const DB_URI = <string>(
  config.DATABASE?.replace('<PASSWORD>', <string>config.DATABASE_PASSWORD)
)

export const dbConnect = async (): Promise<void> => {
  try {
    const connection = await connect(DB_URI)
    log.info(
      `MongoDB connected: ${connection.connection.host} ${connection.connection.port}`
    )
  } catch (err: any) {
    log.error(`DB connection error: ${err.message}`)
    process.exit(1)
  }
  await connect(DB_URI)
}

mongoose.connection.on('disconnected', connect)
