const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
  host: 'smtp.poczta.onet.pl',
  port: 465,
  secure: true,
  auth: {
    user: 'testdlayerby@onet.pl',
    pass: 'TestYerba1!'
  },
  tls: {
    rejectUnauthorized: false
  }
})

const sendMail = (mail) => {
  return new Promise((resolve,reject) => {
    transporter.sendMail(mail, (err, info) => {
        if (err) return reject({ message: err })
        resolve(info)
    })
  })
}

module.exports = {
sendMail
}
