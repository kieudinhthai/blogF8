const express = require('express')
const router = express.Router()


const meConstroller = require('../app/controllers/MeController')

router.get('/stored/courses', meConstroller.storeCourses)
router.get('/trash/courses', meConstroller.trashCourses)
module.exports = router;