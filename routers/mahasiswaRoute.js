const express = require("express");
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const upload = require("../middleware/upload")
const {authenticateToken} = require("../middleware/authToken");

// Existing routes
router.get('/namaMahasiswa', authenticateToken, mahasiswaController.lihatMahasiswa);
router.get('/namaMahasiswa/:id_mahasiswa', authenticateToken, mahasiswaController.lihatDetail);


// New pengajuan route
router.get('/namaMahasiswa/:id_mahasiswa/pengajuan', authenticateToken, mahasiswaController.lihatPengajuan);
router.post('/seminar', upload.single('surat'), authenticateToken, mahasiswaController.createSeminar)

router.put("/pengajuan/:id/status", authenticateToken, mahasiswaController.updateStatusPengajuan);

module.exports = router;
