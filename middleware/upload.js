const multer = require('multer');
const path = require('path');

// Konfigurasi Penyimpanan File (Storage)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tentukan lokasi penyimpanan file (folder 'uploads')
    cb(null, path.join(__dirname, '../uploads')); // Sesuaikan dengan path folder uploads Anda
  },
  filename: function (req, file, cb) {
    // Tentukan nama file yang akan disimpan
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Middleware Upload dengan konfigurasi Multer
const upload = multer({
  storage: storage, // Menetapkan konfigurasi storage di atas
  limits: { fileSize: 2 * 1024 * 1024 }, // Batas ukuran file, misalnya 2MB
  fileFilter: (req, file, cb) => {
    // Validasi jenis file yang diizinkan (PDF, DOC, DOCX)
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // File valid
    } else {
      cb(new Error('Only PDF, DOC, and DOCX formats are allowed'), false); // File tidak valid
    }
  }
});

module.exports = upload;
