const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Order = require('../models/order')
const User = require('../models/user')

const app = require('../../server')

const { sendMail } = require('../mailer')

router.route('/submit').post([
  check('userId').isMongoId(),
  check('items').isArray()
], async (req,res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      const order = new Order()
        order.user = req.body.userId
        order.items = req.body.items
        await order.save()

        const user = await User.findOne({ _id: req.body.userId })

        const mail = {
          from: 'testdlayerby@onet.pl',
          cc: 'esemku@icloud.com',
          to: user.email,
          subject: 'subject',
          text: 'Utworzono zamowienie dla uzytkownika o id: ' + req.body.userId
        };

        const data = await sendMail(mail)

        res.status(500).json({
          status: true,
          data
        });
    } catch(e) {
      console.warn(e)
      res.json({
        status: false,
        msg: `Błąd w zatwierdzaniu koszyka: ${e.message}`
      })
    }
})

module.exports = router
