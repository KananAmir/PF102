const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()
const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });


  module.exports = transporter