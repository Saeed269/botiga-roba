CREATE DATABASE IF NOT EXISTS botiga_roba;
USE botiga_roba;

CREATE TABLE IF NOT EXISTS productes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    preu DECIMAL(10,2) NOT NULL,
    talla VARCHAR(5) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imatge VARCHAR(255) DEFAULT 'default.jpg'
);

INSERT INTO productes (nom, preu, talla, categoria, imatge) VALUES
('Samarreta Bàsica Blanca', 19.99, 'M', 'Samarretes', 'samarreta1.jpg'),
('Samarreta Estampada', 24.99, 'L', 'Samarretes', 'samarreta2.jpg'),
('Samarreta Esportiva', 29.99, 'S', 'Samarretes', 'samarreta3.jpg'),
('Samarreta de Lli', 22.99, 'XL', 'Samarretes', 'samarreta4.jpg');

INSERT INTO productes (nom, preu, talla, categoria, imatge) VALUES
('Pantalons Vaquers', 49.99, 'L', 'Pantalons', 'pantalons1.jpg'),
('Pantalons Chino', 39.99, 'M', 'Pantalons', 'pantalons2.jpg'),
('Pantalons Esportius', 34.99, 'S', 'Pantalons', 'pantalons3.jpg'),
('Pantalons de Cuir', 69.99, 'XL', 'Pantalons', 'pantalons4.jpg');

INSERT INTO productes (nom, preu, talla, categoria, imatge) VALUES
('Jaqueta de Cuir', 89.99, 'S', 'Jaquetes', 'jaqueta1.jpg'),
('Jaqueta Vaquera', 59.99, 'M', 'Jaquetes', 'jaqueta2.jpg'),
('Jaqueta Esportiva', 49.99, 'L', 'Jaquetes', 'jaqueta3.jpg'),
('Jaqueta de Llana', 79.99, 'XL', 'Jaquetes', 'jaqueta4.jpg');