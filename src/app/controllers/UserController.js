const { User } = require('../models')

function existOrErro (input, msg) {
  if (!input) throw msg
}

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    try {
      existOrErro(req.file, 'User avatar invalid')
      existOrErro(req.body.name, 'User name not informed.')
      existOrErro(req.body.email, 'Email name not informed.')
      existOrErro(req.body.password, 'Password name not informed.')
    } catch (msg) {
      req.flash('error', msg)
      return res.redirect('/signup')
    }

    const { filename: avatar } = req.file

    await User.create({ ...req.body, avatar })

    res.redirect('/')
  }
}

module.exports = new UserController()
