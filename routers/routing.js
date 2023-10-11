const express = require('express')
const logicPath = require('../logic/logic')
const router = new express.Router()

router.post('/express/signup', logicPath.signUp)
router.post('/express/login', logicPath.login)
router.post('/express/registration', logicPath.registration)
router.get('/express/profileView/:email', logicPath.profileView)
router.get('/express/detailsView/:email', logicPath.detailsView)
router.get('/express/allProfileView', logicPath.allProfileView)
router.get('/express/editProfile/:email', logicPath.editProfile)
router.put('/express/editProfileView/:email', logicPath.editProfileView)
router.get('/express/singleProfileView/:r_email', logicPath.singleProfileView)
router.post('/express/adminRegistration', logicPath.adminRegistration)
router.post('/express/adminLogin', logicPath.adminLogin)
router.get('/express/deleteProfile/:r_email', logicPath.deleteProfile)


module.exports = router