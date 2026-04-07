<?php
// 0. Paràmetres de connexió
$host = "localhost";
$user = "root";
$pass = "";
$db   = "botiga_roba";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de connexió: " . $conn->connect_error);
}

$id        = $_POST["id"];
$nom       = $_POST["nom"];
$preu      = $_POST["preu"];
$talla     = $_POST["talla"];
$categoria = $_POST["categoria"];
$imatge    = $_POST["imatge"];

$sql = "UPDATE productes SET nom='$nom', preu='$preu', talla='$talla', categoria='$categoria', imatge='$imatge' WHERE id='$id';";
$result = $conn->query($sql);

header('Content-Type: application/json');
if ($result) {
    echo json_encode(["msg" => "Producte editat correctament"]);
} else {
    http_response_code(500);
    echo json_encode(["msg" => "Error al editar el producte"]);
}

$conn->close();
?>