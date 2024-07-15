import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  // Log para mostrar em desenvolvimento as query criadas nas requisições
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
