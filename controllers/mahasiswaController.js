const { Mahasiswa } = require("../models"); // Import Mahasiswa model
const { TugasAkhir } = require("../models"); // Import TugasAkhir model
const { Seminar }  = require("../models")

// Get all Mahasiswa
const lihatMahasiswa = async (req, res) => {
  try {
    const mahasiswaList = await Mahasiswa.findAll();
    res.json(mahasiswaList);
  } catch (error) {
    console.error("Error fetching Mahasiswa:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Mahasiswa details by ID
const lihatDetail = async (req, res) => {
  try {
    const id_mahasiswa = req.params.id_mahasiswa;
    const mahasiswaDetail = await Mahasiswa.findOne({ where: { id: id_mahasiswa } });

    if (!mahasiswaDetail) {
      return res.status(404).json({ message: `Mahasiswa with ID ${id_mahasiswa} not found.` });
    }

    res.json(mahasiswaDetail);
  } catch (error) {
    console.error("Error fetching Mahasiswa detail:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get pengajuan details from TugasAkhir by Mahasiswa ID
const lihatPengajuan = async (req, res) => {
  const id_mahasiswa = req.params.id_mahasiswa;

  try {
    const pengajuan = await TugasAkhir.findOne({
      where: { id_mahasiswa },
      attributes: ["nama_pembimbing", "judul"],
      include: [{model:Mahasiswa,as :"mahasiswa"}] // Select only nama_pembimbing and judul
    });

    if (!pengajuan) {
      return res.status(404).json({ message: `Pengajuan not found for Mahasiswa ID: ${id_mahasiswa}` });
    }

    res.json(pengajuan);
  } catch (error) {
    console.error("Error fetching pengajuan data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createSeminar = async (req, res) => {
  try {
    // Destrukturisasi data dari req.body
    const {
      id_tugas_akhir,
      nama_penguji,
      tanggal_seminar,
      tempat_seminar,
      status_seminar,
      komentar,
    } = req.body;
    console.log("Request Body:", req.body);

    // Validasi input
    if (!id_tugas_akhir || !nama_penguji || !tanggal_seminar || !tempat_seminar || !status_seminar) {
      return res.status(400).json({ message: 'Semua field wajib diisi!' });
    }

    // Ambil file surat jika diunggah
    const surat = req.file ? req.file.filename : null;
    console.log(surat)

    // Buat entitas seminar baru
    const createdSeminar = await Seminar.create({
      id_tugas_akhir,
      nama_penguji,
      tanggal_seminar,
      tempat_seminar,
      status_seminar,
      komentar,
      surat,
    });

    // Kirim respon sukses
    res.status(201).json({
      message: 'Seminar berhasil dibuat',
      data: createdSeminar,
    });
  } catch (error) {
    console.error('Error creating seminar:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update Tugas Akhir status
const updateStatusPengajuan = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // Validasi status
  const validStatuses = ["menunggu", "tolak", "setuju"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const tugasAkhir = await TugasAkhir.findByPk(id);
    if (!tugasAkhir) {
      return res.status(404).json({ message: "Tugas Akhir not found" });
    }

    tugasAkhir.status = status;
    await tugasAkhir.save();

    res.status(200).json({ message: "Status updated successfully", tugasAkhir });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export all controller functions
module.exports = {
  lihatMahasiswa,
  lihatDetail,
  lihatPengajuan,
  createSeminar,
  updateStatusPengajuan
};
