import { Request, Response } from "express";
import MailHandler from "../service/mailHandler"; 
import { MailTemplate } from "../service/mailTemplate";

export async function sendMail(req: Request, res: Response) {
    try{
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
             return res.status(400).json({message: 'Todos os campos são obrigatórios.'});
        }
        const emailHTML = MailTemplate(name, email, message); 

        const emailConfig = {
            userName: name,
            userEmail: email, 
            subjectText: `Novo Feedback de: ${name}`,
            html: emailHTML
        }

        const mailResponse = await MailHandler(emailConfig);

        if (mailResponse){
            return res.status(200).json({message: 'Feedback enviado com sucesso!'});
        } 
        return res.status(500).json({message: 'Falha ao enviar e-mail.'});

    } catch(error){
        console.error('Erro no Controller de Email:', error);
        return res.status(500).json({message: 'Erro interno do servidor.'});
    };
}
