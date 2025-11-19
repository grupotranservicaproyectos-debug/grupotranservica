import type { Request, Response, NextFunction } from 'express';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const MAX_REQUESTS = 10;

function cleanupOldEntries() {
  const now = Date.now();
  const entries = Array.from(rateLimitStore.entries());
  for (const [key, entry] of entries) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

export function blogGenerationRateLimit(req: Request, res: Response, next: NextFunction) {
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  
  cleanupOldEntries();
  
  const entry = rateLimitStore.get(clientIp);
  
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return next();
  }
  
  if (entry.count >= MAX_REQUESTS) {
    const remainingTime = Math.ceil((entry.resetTime - now) / 1000 / 60);
    return res.status(429).json({
      success: false,
      message: `Límite de generación excedido. Intenta nuevamente en ${remainingTime} minutos.`,
      retryAfter: remainingTime,
    });
  }
  
  entry.count++;
  next();
}
