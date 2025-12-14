import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export interface AuthUser {
  id: string
  email: string
  role: string
}

export function verifyToken(request: NextRequest): AuthUser | null {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null
    }

    const token = authHeader.substring(7)
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as AuthUser

    return decoded
  } catch (error) {
    return null
  }
}

export function requireAuth(request: NextRequest): AuthUser {
  const user = verifyToken(request)
  if (!user) {
    throw new Error('Unauthorized')
  }
  return user
}

