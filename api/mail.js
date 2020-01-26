function post(req, res) {
  const { name, email, subject, message } = req.body;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  const mail = {
    from: name,
    to: process.env.SMTP_DELIVERY_ADDRESS,
    subject: subject,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(500).json({
        errors: err
      });
    } else {
      res.json({
       status: 'success'
     });
    }
  });
}

module.exports = { post };
