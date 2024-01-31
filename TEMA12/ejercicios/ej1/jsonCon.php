<?php
class Conexion
{
    public $pdo;
    public function __construct()
    {
        try {
            $dsn = "mysql:host=localhost;dbname=tema10";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_PERSISTENT => false,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
            ];
            $this->pdo = new PDO($dsn, "root", "", $options);
        } catch (PDOException $e) {
            exit();
        }
    }
}

if (!isset($_GET['ClienteId'])) {
    // Vamos a crear la consulta correspondiente
    $sql = "SELECT id, nombre, apellidos, ciudad FROM tema10.datos";

    // Realizamos la conexión
    $conexion = new Conexion();
    $pdostmt = $conexion->pdo->prepare($sql);

    // Ejecutamos la consulta
    $pdostmt->execute();

    // Indicamos el tipo de fetch para el resultado
    $result = $pdostmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolvemos el resultado, convertido a JSON
    echo json_encode($result);
} else {
    // Vamos a crear la consulta correspondiente
    $sql = "SELECT id, nombre FROM tema10.datos";

    // Realizamos la conexión
    $conexion = new Conexion();
    $pdostmt = $conexion->pdo->prepare($sql);

    // Vinculamos la variable
    // $pdostmt->bindParam(':id', $id, PDO::PARAM_INT);

    // Ejecutamos la consulta
    $pdostmt->execute();

    // Indicamos el tipo de fetch para el resultado
    $result = $pdostmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolvemos el resultado, convertido a JSON
    echo json_encode($result);
}

?>