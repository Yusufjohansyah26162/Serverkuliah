
const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');

const app = express();
app.use(bodyParser.json());

app.get('/mahasiswa', mahasiswaController.getAllMahasiswa);
app.get('/mahasiswa/:nim', mahasiswaController.getMahasiswaByNim);
app.post('/mahasiswa', mahasiswaController.addMahasiswa);
app.put('/mahasiswa/:nim', mahasiswaController.updateMahasiswa);
app.delete('/mahasiswa/:nim', mahasiswaController.deleteMahasiswa);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
