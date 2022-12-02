import express, { Express } from 'express'
import { CUTTeventsSERVER } from './server'
import { dbConnect } from '../mongo'
import { config } from '../config'
import { router } from './routes'

class Application {
  public initialize(): void {
    this.loadConfig()
    dbConnect()
    const app: Express = express()
    app.use(router)
    const server: CUTTeventsSERVER = new CUTTeventsSERVER(app)
    server.start()
  }
  private loadConfig(): void {
    config.validateConfig()
  }
}

const application: Application = new Application()

application.initialize()
