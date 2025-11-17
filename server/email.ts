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

export interface EmailNotificationData {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

const NOTIFICATION_EMAILS = [
  'equiserdominios@gmail.com',
  'equisercadominios@gmail.com',
  'marketingimpulsoai@gmail.com',
  'direccioncomercialtvc@grupotranservica.com',
  'direccionejecutivatvc@grupotranservica.com'
];

export async function sendNotificationEmails(data: EmailNotificationData): Promise<string[]> {
  const emailPromises = NOTIFICATION_EMAILS.map(async (email) => {
    try {
      await transporter.sendMail({
        from: `"TRANSERVICA Contacto" <${gmailUser}>`,
        to: email,
        subject: `Nuevo Contacto Web - ${data.asunto}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #155d29; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">TRANSERVICA</h1>
              <p style="color: white; margin: 5px 0;">Nuevo Contacto Recibido</p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
              <h2 style="color: #155d29; margin-top: 0;">Información del Contacto</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Nombre:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Correo:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.correo}">${data.correo}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:${data.telefono}">${data.telefono}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Asunto:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.asunto}</td>
                </tr>
              </table>
              
              <h3 style="color: #155d29; margin-top: 20px;">Mensaje:</h3>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #155d29; margin-top: 10px;">
                ${data.mensaje.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background-color: #155d29; padding: 15px; text-align: center; margin-top: 20px;">
              <p style="color: white; margin: 0; font-size: 12px;">
                Este correo fue enviado automáticamente desde el formulario de contacto de TRANSERVICA.
              </p>
            </div>
          </div>
        `,
      });
      return email;
    } catch (error) {
      console.error(`Error sending notification to ${email}:`, error);
      throw error;
    }
  });

  const results = await Promise.allSettled(emailPromises);
  const successfulEmails = results
    .filter((result) => result.status === 'fulfilled')
    .map((result) => (result as PromiseFulfilledResult<string>).value);

  return successfulEmails;
}

export async function sendConfirmationEmail(
  recipientEmail: string,
  nombre: string
): Promise<void> {
  await transporter.sendMail({
    from: `"TRANSERVICA" <${gmailUser}>`,
    to: recipientEmail,
    subject: 'Confirmación de Contacto - TRANSERVICA',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #155d29; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">TRANSERVICA</h1>
          <p style="color: white; margin: 5px 0;">Transporte de Cargas Excepcionales</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
          <h2 style="color: #155d29; margin-top: 0;">¡Gracias por contactarnos, ${nombre}!</h2>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hemos recibido tu solicitud y nuestro equipo la está revisando. 
            Nos pondremos en contacto contigo a la brevedad posible para atender tus necesidades 
            de transporte de cargas excepcionales.
          </p>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #155d29; margin: 20px 0;">
            <h3 style="color: #155d29; margin-top: 0;">Información de Contacto</h3>
            <p style="margin: 5px 0;"><strong>Teléfonos:</strong></p>
            <p style="margin: 5px 0;">+58 422-6361047</p>
            <p style="margin: 5px 0;">+58 412-367-5636</p>
            <p style="margin: 5px 0;">+58 414-277-6340</p>
            <p style="margin: 10px 0 5px 0;"><strong>Correos:</strong></p>
            <p style="margin: 5px 0;">direccioncomercialtvc@grupotranservica.com</p>
            <p style="margin: 5px 0;">direccionejecutivatvc@grupotranservica.com</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Si necesitas comunicarte de inmediato, puedes hacerlo a través de nuestro 
            <a href="https://wa.me/message/WAKKACM55ESHC1" style="color: #155d29;">WhatsApp</a>.
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
}

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('Email server connection verified successfully');
    return true;
  } catch (error) {
    console.error('Email server connection failed:', error);
    return false;
  }
}
