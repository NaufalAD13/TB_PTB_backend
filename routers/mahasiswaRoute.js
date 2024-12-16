const express = require("express");
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const upload = require("../middleware/upload")

// Existing routes
router.get('/namaMahasiswa', mahasiswaController.lihatMahasiswa);
router.get('/namaMahasiswa/:id_mahasiswa', mahasiswaController.lihatDetail);


// New pengajuan route
router.get('/namaMahasiswa/:id_mahasiswa/pengajuan', mahasiswaController.lihatPengajuan);
router.post('/seminar', upload.single('surat'), mahasiswaController.createSeminar)

router.put("/pengajuan/:id/status", mahasiswaController.updateStatusPengajuan);

module.exports = router;
