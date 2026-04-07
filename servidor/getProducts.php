<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "botiga_roba";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de connexió: " . $conn->connect_error);
}

$sql = "SELECT id, nom, preu, talla, categoria, imatge FROM productes ORDER BY categoria;";
$result = $conn->query($sql);

$productes = $result->fetch_all(MYSQLI_ASSOC);
header('Content-Type: application/json');
echo json_encode($productes);

$conn->close();
?>