const nodemailer = require("nodemailer");
const {senderEmail , senderAppPassword} = require("../config/keys")

const sendEmail = async({emailTo , subject , code , content})=>{
    try{
   const transporter = nodemailer.createTransport({
       service : "gmail",
        auth : {
            user : senderEmail,
            pass : senderAppPassword
        }
    });

    const message = {
        from : `"CarrerHub" <${senderEmail}>`,
        to : emailTo,
        subject,
        html : `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #FF5722;">Your Verification Code</h2>
          <p><strong>Your Code is:</strong> <span style="font-size: 18px; color: #FF5722;">${code}</span></p>
          ${content ? `<p>${content}</p>` : ""}
          <hr style="margin-top: 20px;">
          <small>This email was sent automatically. Please do not reply.</small>
        </div>
        `
    };

    await transporter.sendMail(message);

    console.log ("Email Sent Successfully");
    }catch(error){
        console.log ("Email Not Sent Successfully");
        throw new Error(`Email Not Sent Successfully , ${error.message}`)
    }
};

module.exports = sendEmail;

