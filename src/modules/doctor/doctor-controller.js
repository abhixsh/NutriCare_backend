const Doctor = require('./doctor-model');

async function getAllDoctors(req, res) {
    const doctors = await Doctor.find();
    res.json(doctors);
}

async function getDoctorById(req, res) {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    res.json(doctor);
}

async function searchDoctor(req, res) {
    const { query } = req.params;
    const doctor = await Doctor.find({ docName: { $regex: query, $options: 'i' } });
    res.json(doctor);
}

async function createDoctor(req, res) {
    const doctor = new Doctor({
        docName: req.body.docName,
        docPosition: req.body.docPosition,
        docDesc: req.body.docDesc,
        docNumber: req.body.docNumber,
        docImg: req.body.docImg
    });
    try {
        await doctor.save();
        res.json(doctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateDoctor(req, res) {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (req.body.docName) {
            doctor.docName = req.body.docName;
        }
        if (req.body.docPosition) {
            doctor.docPosition = req.body.docPosition;
        }
        if (req.body.docDesc) {
            doctor.docDesc = req.body.docDesc;
        }
        if (req.body.docNumber) {
            doctor.docNumber = req.body.docNumber;
        }
        if (req.body.docImg) {
            doctor.docImg = req.body.docImg;
        }
        await doctor.save();
        res.json(doctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteDoctor(req, res) {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Doctor deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllDoctors,
    searchDoctor,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor
}