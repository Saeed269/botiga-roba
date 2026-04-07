CREATE DATABASE IF NOT EXISTS botiga_roba;
USE botiga_roba;

CREATE TABLE IF NOT EXISTS productes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    preu DECIMAL(10,2) NOT NULL,
    talla VARCHAR(5) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

INSERT INTO productes (nom, preu, talla, categoria) VALUES
('Samarreta Bàsica', 19.99, 'M', 'Samarreta'),
('Pantalons Vaquers', 49.99, 'L', 'Pantalons'),
('Jaqueta de Cuir', 89.99, 'S', 'Jaquetes'),
('Vestit Floral', 39.99, 'M', 'Vestits'),
('Sudadera amb Caputxa', 34.99, 'XL', 'Sudaderes');