
CREATE DATABASE IF NOT EXISTS mahasiswa;

USE mahasiswa;

CREATE TABLE IF NOT EXISTS mahasiswa (
    nim CHAR(10) PRIMARY KEY,
    nama VARCHAR(25) NOT NULL,
    gender ENUM('L', 'P') NOT NULL,
    prodi ENUM('TI', 'TE', 'SI') NOT NULL,
    alamat TEXT
);

INSERT INTO mahasiswa (nim, nama, gender, prodi, alamat) VALUES
('1234567890', 'John Doe', 'L', 'TI', '123 Main St'),
('0987654321', 'Jane Smith', 'P', 'SI', '456 Elm St');
