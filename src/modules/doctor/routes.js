const express = require('express')
const router = express.Router()


const { getAllDoctors, getDoctorById, searchDoctor, createDoctor, updateDoctor, deleteDoctor } = require('./doctor-controller')

router.get('/get-all', getAllDoctors)

router.get('/search/:query', searchDoctor)

router.get('/get/:id', getDoctorById)

router.post('/create', createDoctor)

router.put('/update/:id', updateDoctor)

router.delete('/delete/:id', deleteDoctor)

module.exports = router