const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashBoardController = require('./app/controllers/DashBoardController')
const FileController = require('./app/controllers/FileController')
const AppointmentsController = require('./app/controllers/AppointmentsController')
const AvaliableController = require('./app/controllers/AvaliableController')

routes.use((req, res, next) => {
  res.locals.flashSucess = req.flash('sucess')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/files/:file', FileController.show)

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware)

routes.get('/app/logout', SessionController.destroy)

routes.get('/app/dashboard', DashBoardController.index)

routes.get('/app/appointments/new/:provider', AppointmentsController.create)
routes.post('/app/appointments/new/:provider', AppointmentsController.store)
routes.get('/app/avaiable/:provider', AvaliableController.index)

module.exports = routes
