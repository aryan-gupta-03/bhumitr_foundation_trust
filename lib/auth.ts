import { NextRequest } from 'next/server'

export interface AuthUser {
  id: string
  email: string
  role: string
}

// Optional JWT - only works if jsonwebtoken is installed
let jwt: any = null
try {
  jwt = require('jsonwebtoken')
} catch {
  // jsonwebtoken not installed - auth features disabled
}

export function verifyToken(request: NextRequest): AuthUser | null {
  // Auth is disabled for quick deployment without dependencies
  if (!jwt || !process.env.JWT_SECRET) {
    return null
  }

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

