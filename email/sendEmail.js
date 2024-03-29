import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from "nodemailer";
import ejs from "ejs";

export const sendEmail = async (emailInfo) => {
  const { template, email } = emailInfo

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory

  const filePath = __dirname + `/templates/${template}/${template}.ejs`
  const data = await ejs.renderFile(filePath, emailInfo);

  const mainOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'Welcome to Navication',
    html: data
  };

  const emailResponse = async () => {
    try {
      const info = await transporter.sendMail(mainOptions)
      console.log('Message sent: ' + info.response);
      return { error: false, message: info.response }
    } catch (error) {
      console.log(error);
      return { error: true, message: error.message }
    }
  }

  return await emailResponse()
}