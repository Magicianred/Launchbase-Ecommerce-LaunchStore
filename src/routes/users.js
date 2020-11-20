const express = require("express")
const routes = express.Router();

const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')

// All of theses routes start with "/users"
//login/logout
// routes.get('/login', SessionController.loginForm)
// routes.post('/login', SessionController.login)
// routes.post('/logout', SessionController.logout)



// //reset password / forgot password
// routes.get('/forgot-password', SessionController.forgotForm)
// routes.post('/forgot-password', SessionController.forgot)
// routes.get('/password-reset', SessionController.resetForm)
// routes.post('/password-reset', SessionController.reset)

// //user registration controller
routes.get('/register', UserController.registerForm)
// routes.post('/register', UserController.post)

// routes.get('/register', UserController.show)
// routes.put('/register', UserController.update)
// routes.delete('/register', UserController.delete)



module.exports = routes