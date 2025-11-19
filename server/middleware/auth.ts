import type { Request, Response, NextFunction } from 'express';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

if (!ADMIN_TOKEN) {
  console.error('❌ CRITICAL: ADMIN_TOKEN environment variable is not set!');
  console.error('Blog generation endpoints will be disabled for security.');
  console.error('Set ADMIN_TOKEN in your environment to enable admin features.');
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!ADMIN_TOKEN) {
    return res.status(503).json({ 
      success: false,
      message: 'Servicio no disponible: Autenticación no configurada. Contacte al administrador.' 
    });
  }

  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      success: false,
      message: 'No autorizado: Se requiere token de administrador' 
    });
  }
  
  const token = authHeader.substring(7);
  
  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({ 
      success: false,
      message: 'Acceso denegado: Token inválido' 
    });
  }
  
  next();
}
