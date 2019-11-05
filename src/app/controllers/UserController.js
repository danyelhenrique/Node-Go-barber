const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    // req.body.avatar = "teste.jpg"

    await User.create(req.body)

    res.redirect('/')
  }
}

module.exports = new UserController()
