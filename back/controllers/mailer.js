import nodemailer from "nodemailer";

export const sendMail = async (req, res, next) => {
  try {
    const { nombre, apellido, email, telefono, razon, mensaje } = req.body;

    console.log("sendmailll");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: {
        name: "Sociedad Entomologica Cruceña",
        address: process.env.MAIL_USER,
      },
      to: ["marcelo0920.z@gmail.com"],
      subject: "Mensaje para la Sociedad Entomologica Cruceña",
      text: `
        Nombre: ${nombre},
        Apellido: ${apellido},
        Email: ${email},
        Telefono: ${telefono},
        Razon del Mensaje: ${razon},
        Mensaje: ${mensaje}
      `,
    };

    console.log("lalala");

    const sendMail = async (transporter, mailOptions) => {
      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
      } catch (error) {
        console.error(error);
      }
    };

    sendMail(transporter, mailOptions);

    res.status(200).json({ mensaje: "Email enviado con exito" });
  } catch (error) {
    next(error);
  }
};
