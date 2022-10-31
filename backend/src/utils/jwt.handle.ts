import { sign, verify } from 'jsonwebtoken'
import { config } from '../../config'

const JWT_SECRET = config.JWT_SECRET || 'token.0101010101'

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '90d' })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

export { generateToken, verifyToken }
