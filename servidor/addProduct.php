<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "botiga_roba";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de connexió: " . $conn->connect_error);
}

$nom       = $_POST["nom"];
$preu      = $_POST["preu"];
$talla     = $_POST["talla"];
$categoria = $_POST["categoria"];
$imatge    = $_POST["imatge"];

$sql = "INSERT INTO productes (nom, preu, talla, categoria, imatge) VALUES ('$nom', '$preu', '$talla', '$categoria', '$imatge');";
$result = $conn->query($sql);

header('Content-Type: application/json');
if ($result) {
    echo json_encode(["msg" => "Producte afegit correctament"]);
} else {
    http_response_code(500);
    echo json_encode(["msg" => "Error al afegir el producte"]);
}

$conn->close();
?>