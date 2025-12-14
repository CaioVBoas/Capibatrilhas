import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailConfig {
    userName: string;
    userEmail: string; 
    subjectText: string;
    html: string;
}

async function MailHandler(emailConfig: EmailConfig){
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD, 
            },
        });

        await transporter.sendMail({
            from: `"Feedback do Site" <${process.env.EMAIL}>`, 
            to: process.env.EMAIL, 
            replyTo: emailConfig.userEmail,  
            subject: emailConfig.subjectText,
            html: emailConfig.html,
        });
        
        return true;
    } catch(error){
        console.error("Erro no Nodemailer:", error);
        return false;
    };
}

export default MailHandler;
