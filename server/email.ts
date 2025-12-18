import nodemailer from 'nodemailer';

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!gmailUser || !gmailAppPassword) {
  console.error('ERROR: GMAIL_USER and GMAIL_APP_PASSWORD must be set in environment variables');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

// Updated notification email list as per user request
const NOTIFICATION_EMAILS = [
  'direccioncomercialtvc@grupotranservica.com',
  'direccionejecutivatvc@grupotranservica.com',
  'grupotranservicaproyectos@gmail.com',
  'marketingimpulsoai@gmail.com',
  'direccionmercadeo@equisercranes.com'
];

// Rate limiting storage: IP -> { count, resetTime }
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes in ms

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetIn: RATE_LIMIT_WINDOW / 1000 };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    const resetIn = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, resetIn };
  }
  
  record.count += 1;
  rateLimitStore.set(ip, record);
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count, resetIn: Math.ceil((record.resetTime - now) / 1000) };
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  const entries = Array.from(rateLimitStore.entries());
  entries.forEach(([ip, record]) => {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  });
}, 60000); // Clean every minute

export interface EmailNotificationData {
  nombre: string;
  empresa?: string;
  correo: string;
  telefono: string;
  tipoCarga?: string;
  pesoEstimado?: number;
  origen?: string;
  destino?: string;
  mensaje: string;
  ip?: string;
  timestamp?: Date;
}

// Retry logic helper
async function sendWithRetry(mailOptions: nodemailer.SendMailOptions, maxRetries = 3): Promise<void> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await transporter.sendMail(mailOptions);
      return;
    } catch (error) {
      console.error(`[EMAIL] Attempt ${attempt}/${maxRetries} failed:`, error);
      if (attempt === maxRetries) throw error;
      // Wait before retry: 1s, 2s, 3s
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
}

// Sanitize HTML to prevent XSS
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendNotificationEmails(data: EmailNotificationData): Promise<string[]> {
  const timestamp = data.timestamp || new Date();
  const formattedDate = timestamp.toLocaleString('es-VE', { 
    timeZone: 'America/Caracas',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  console.log(`[EMAIL] Starting notification send to ${NOTIFICATION_EMAILS.length} recipients at ${formattedDate}`);

  const emailPromises = NOTIFICATION_EMAILS.map(async (email) => {
    try {
      await sendWithRetry({
        from: `"TRANSERVICA Contacto" <${gmailUser}>`,
        to: email,
        subject: `Nueva Solicitud de Cotización - ${sanitizeHtml(data.nombre)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
            <div style="background-color: #155d29; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">TRANSERVICA</h1>
              <p style="color: white; margin: 5px 0;">Nueva Solicitud de Cotización</p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
              <h2 style="color: #155d29; margin-top: 0;">Información del Cliente</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 35%; background-color: #f5f5f5;">Nombre:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${sanitizeHtml(data.nombre)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Empresa:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${data.empresa ? sanitizeHtml(data.empresa) : '<em>No especificada</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Correo:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;"><a href="mailto:${sanitizeHtml(data.correo)}">${sanitizeHtml(data.correo)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Teléfono:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;"><a href="tel:${sanitizeHtml(data.telefono)}">${sanitizeHtml(data.telefono)}</a></td>
                </tr>
              </table>

              <h2 style="color: #155d29; margin-top: 25px;">Detalles de la Carga</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; width: 35%; background-color: #f5f5f5;">Tipo de Carga:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${data.tipoCarga ? sanitizeHtml(data.tipoCarga) : '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Peso Estimado:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${data.pesoEstimado ? `${data.pesoEstimado.toLocaleString()} toneladas` : '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Origen:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${data.origen ? sanitizeHtml(data.origen) : '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; background-color: #f5f5f5;">Destino:</td>
                  <td style="padding: 12px; border-bottom: 1px solid #ddd;">${data.destino ? sanitizeHtml(data.destino) : '<em>No especificado</em>'}</td>
                </tr>
              </table>
              
              <h3 style="color: #155d29; margin-top: 25px;">Descripción del Proyecto:</h3>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #155d29; margin-top: 10px;">
                ${sanitizeHtml(data.mensaje).replace(/\n/g, '<br>')}
              </div>

              <div style="margin-top: 25px; padding: 15px; background-color: #e8f5e9; border-radius: 8px;">
                <h4 style="color: #155d29; margin: 0 0 10px 0;">Información del Envío</h4>
                <p style="margin: 5px 0; font-size: 13px; color: #666;"><strong>Fecha/Hora:</strong> ${formattedDate}</p>
                <p style="margin: 5px 0; font-size: 13px; color: #666;"><strong>IP del Cliente:</strong> ${data.ip || 'No disponible'}</p>
              </div>
            </div>
            
            <div style="background-color: #155d29; padding: 15px; text-align: center; margin-top: 20px;">
              <p style="color: white; margin: 0; font-size: 12px;">
                Este correo fue enviado automáticamente desde el formulario de contacto de TRANSERVICA.
              </p>
              <p style="color: #a5d6a7; margin: 5px 0 0 0; font-size: 11px;">
                Responder directamente a este correo contactará al cliente.
              </p>
            </div>
          </div>
        `,
        replyTo: data.correo, // Allow direct reply to customer
      });
      console.log(`[EMAIL] Successfully sent to ${email}`);
      return email;
    } catch (error) {
      console.error(`[EMAIL] Failed to send notification to ${email} after 3 attempts:`, error);
      throw error;
    }
  });

  const results = await Promise.allSettled(emailPromises);
  const successfulEmails = results
    .filter((result) => result.status === 'fulfilled')
    .map((result) => (result as PromiseFulfilledResult<string>).value);

  const failedCount = NOTIFICATION_EMAILS.length - successfulEmails.length;
  console.log(`[EMAIL] Notification complete: ${successfulEmails.length} sent, ${failedCount} failed`);

  return successfulEmails;
}

export async function sendConfirmationEmail(
  recipientEmail: string,
  nombre: string
): Promise<void> {
  console.log(`[EMAIL] Sending confirmation to ${recipientEmail}`);
  
  await sendWithRetry({
    from: `"TRANSERVICA" <${gmailUser}>`,
    to: recipientEmail,
    subject: 'Cotización Enviada Exitosamente - TRANSERVICA',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #155d29; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">TRANSERVICA</h1>
          <p style="color: white; margin: 5px 0;">Transporte de Cargas Excepcionales</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
          <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h2 style="color: #155d29; margin: 0;">✅ Cotización enviada exitosamente</h2>
            <p style="color: #2e7d32; margin: 10px 0 0 0; font-size: 16px;">
              Le responderemos en menos de 24 horas
            </p>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            ¡Gracias por contactarnos, <strong>${sanitizeHtml(nombre)}</strong>!
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hemos recibido tu solicitud de cotización y nuestro equipo comercial la está revisando. 
            Nos pondremos en contacto contigo a la brevedad posible para atender tus necesidades 
            de transporte de cargas excepcionales.
          </p>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #155d29; margin: 25px 0;">
            <h3 style="color: #155d29; margin-top: 0;">Información de Contacto</h3>
            <p style="margin: 5px 0;"><strong>Teléfonos:</strong></p>
            <p style="margin: 5px 0;">📞 +58 422-6361047</p>
            <p style="margin: 5px 0;">📞 +58 412-367-5636</p>
            <p style="margin: 5px 0;">📞 +58 414-277-6340</p>
            <p style="margin: 15px 0 5px 0;"><strong>Correos:</strong></p>
            <p style="margin: 5px 0;">✉️ direccioncomercialtvc@grupotranservica.com</p>
            <p style="margin: 5px 0;">✉️ direccionejecutivatvc@grupotranservica.com</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Si necesitas comunicarte de inmediato, puedes hacerlo a través de nuestro 
            <a href="https://wa.me/message/WAKKACM55ESHC1" style="color: #155d29; font-weight: bold;">WhatsApp</a>.
          </p>
        </div>
        
        <div style="background-color: #155d29; padding: 15px; text-align: center; margin-top: 20px;">
          <p style="color: white; margin: 0; font-size: 12px;">
            TRANSERVICA, C.A. - 40 años transportando tu confianza
          </p>
          <p style="color: white; margin: 5px 0 0 0; font-size: 11px;">
            Carretera Nacional Maracay Mariara Km 9, Mariara, Edo. Carabobo, Venezuela
          </p>
        </div>
      </div>
    `,
  });
  
  console.log(`[EMAIL] Confirmation sent successfully to ${recipientEmail}`);
}

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('[EMAIL] Server connection verified successfully');
    return true;
  } catch (error) {
    console.error('[EMAIL] Server connection failed:', error);
    return false;
  }
}

// Log email configuration on startup
console.log(`[EMAIL] Configured to send notifications to ${NOTIFICATION_EMAILS.length} recipients`);
console.log(`[EMAIL] Rate limit: ${RATE_LIMIT_MAX} requests per ${RATE_LIMIT_WINDOW / 60000} minutes per IP`);
