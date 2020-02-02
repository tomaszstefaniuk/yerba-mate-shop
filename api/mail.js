const {sendMail} = require('./mailer')

function post(req, res) {
  const { name, email, subject, message } = req.body;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  const mail = {
    from: 'testdlayerby@onet.pl',
    to: 'esemku@icloud.com',
    cc: email,
    subject: 'Informacja z formularza, ' + subject,
    text: content
  };

  sendMail(mail).then((data) => {
      res.json({
       status: 'success',
       data
     });
  }).catch(e => {
    res.status(500).json({
      status: false,
      msg: e
    });
  });
}

module.exports = { post };
