const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAILSERVICE,
  port: Number(process.env.EMAILPORT),
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS
  },
  tls: {
    rejectUnauthorized: false
  }
})


const sendEmail = async ( email ) => {
  const info = await transporter.sendMail({
    from: email.from,
    to: email.to,
    subject: email.subject,
    text: email.text,
    html: email.html
  })
  return info
}
/*

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
*/

module.exports = { sendEmail }
