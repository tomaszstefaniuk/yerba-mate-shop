const express = require('express')
const router = express.Router()

const User = require('../models/user')

const jwt = require('jsonwebtoken')
const app = require('../../server')

router.route('/login').post(async (req,res) => {
  // @TODO porównać hasło
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(401).send()
  return res.json({
    status: true,
    data: user
  })
})

router.route('/register').post(async (req,res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) return res.json({
    status:false,
    msg: 'User already exist'
  })

  const token = jwt.sign(req.body.email, req.app.get('secret'))

    const created = new User()
    created.token = token
    created.name = req.body.name
    created.email = req.body.email
    created.password = req.body.password
    created.save()

  return res.json({
    status: true,
    data: created
  })
})

module.exports = router
