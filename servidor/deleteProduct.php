<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "botiga_roba";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de connexió: " . $conn->connect_error);
}

$id = $_POST["id"];

$sql = "DELETE FROM productes WHERE id='$id';";
$result = $conn->query($sql);

header('Content-Type: application/json');
if ($result) {
    echo json_encode(["msg" => "Producte eliminat correctament"]);
} else {
    http_response_code(500);
    echo json_encode(["msg" => "Error al eliminar el producte"]);
}

$conn->close();
?>