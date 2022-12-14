import { Application, json, Request, Response, urlencoded, NextFunction } from 'express'
import http from 'http'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import cookieSession from 'cookie-session'
import compression from 'compression'
import Logger from 'bunyan'
import HTTP_STATUS from 'http-status-codes'
import { config } from '../config'
import { CustomError, IErrorResponse } from '@/utils/error.handler'
import { applicationRoutes } from './routes'

const log: Logger = config.createLogger('server')

export class CUTTeventsSERVER {
  private app: Application
  constructor(app: Application) {
    this.app = app
  }

  public start(): void {
    this.securityMiddleware(this.app)
    this.standardMiddleware(this.app)
    this.routesMiddleware(this.app)
    this.globalErrorHandler(this.app)
    this.startServer(this.app)
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: 'session',
        keys: [config.SECRET_KEY_ONE!, config.SECRET_KEY_TWO!],
        maxAge: 24 * 7 * 60 * 60 * 1000, // 7 days
        secure: config.NODE_ENV !== 'development'
      })
    )
    app.use(hpp())
    app.use(helmet())
    app.use(
      cors({
        origin: config.FRONTEND_URL,
        credentials: false,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
      })
    )
  }
  private standardMiddleware(app: Application): void {
    app.use(compression())
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ extended: true, limit: '50mb' }))
  }
  private routesMiddleware(app: Application): void {
    applicationRoutes(app)
  }
  private globalErrorHandler(app: Application): void {
    //For handling urls that actually don't exist
    app.all('*', (req: Request, res: Response) => {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        message: `Can't find ${req.originalUrl} on this server!`
      })
    })
    //For handling custom errors
    app.use((err: IErrorResponse, _req: Request, res: Response, next: NextFunction) => {
      log.error(err)
      if (err instanceof CustomError) {
        return res.status(err.statusCode).json(err.serializeErrors())
      }
      next()
    })
  }
  private async startServer(app: Application): Promise<void> {
    try {
      const httpServer: http.Server = new http.Server(app)
      this.startHttpServer(httpServer)
    } catch (error) {
      log.error(error)
    }
  }

  private startHttpServer(httpServer: http.Server): void {
    httpServer.listen(config.PORT, () => {
      log.info(`Server is running on port ${config.PORT}`)
    })
  }
}
