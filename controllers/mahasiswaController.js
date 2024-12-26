
const db = require('../models/db');

// Get all students
exports.getAllMahasiswa = (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Get student by NIM
exports.getMahasiswaByNim = (req, res) => {
    const { nim } = req.params;
    db.query('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

// Add new student
exports.addMahasiswa = (req, res) => {
    const { nim, nama, gender, prodi, alamat } = req.body;
    db.query(
        'INSERT INTO mahasiswa (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)',
        [nim, nama, gender, prodi, alamat],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send('Mahasiswa added successfully!');
        }
    );
};

// Update student data
exports.updateMahasiswa = (req, res) => {
    const { nim } = req.params;
    const { nama, gender, prodi, alamat } = req.body;
    db.query(
        'UPDATE mahasiswa SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?',
        [nama, gender, prodi, alamat, nim],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send('Mahasiswa updated successfully!');
        }
    );
};

// Delete student
exports.deleteMahasiswa = (req, res) => {
    const { nim } = req.params;
    db.query('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Mahasiswa deleted successfully!');
    });
};
