export function MailTemplate(userName: string, userEmail: string, userMessage: string) {
    return `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #007bff; padding: 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Novo Feedback Recebido</h2>
        </div>
        
        <div style="padding: 20px;">
          <p style="font-size: 16px;">Olá, você recebeu uma nova mensagem através da Landing Page.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Nome:</strong> ${userName}</p>
            <p style="margin: 5px 0;"><strong>E-mail:</strong> ${userEmail}</p>
          </div>
  
          <p><strong>Mensagem:</strong></p>
          <blockquote style="border-left: 4px solid #007bff; padding-left: 15px; margin-left: 0; font-style: italic; color: #555;">
            "${userMessage}"
          </blockquote>
        </div>
  
        <div style="background-color: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #888;">
          Este e-mail foi enviado automaticamente pelo seu sistema.
        </div>
      </div>
    `;
  }
