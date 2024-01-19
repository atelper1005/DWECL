<?php
class Conexion
{
    public $pdo;

    public function __construct()
    {
        try {
            $dsn = "mysql:host=localhost;dbname=tema10";
            $this->pdo = new PDO($dsn, "root", "", []);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_PERSISTENT, false);
            $this->pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $this->pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");
        } catch (PDOException $e) {
            error_log("Error al crear la conexión: " . $e->getMessage());
            echo "Ha ocurrido un error al conectarse a la base de datos.";
            exit;
        }
    }
}

if (isset($_GET['datos'])) {
    // Vamos a crear la consulta correspondiente
    $id = $_GET['datos'];
    $sql = "SELECT id, nombre, apellidos, ciudad FROM tema10.datos WHERE id = :id";

    // Realizamos la conexión
    $conexion = new Conexion();
    $pdostmt = $conexion->pdo->prepare($sql);

    // Vinculamos la variable
    $pdostmt->bindParam(':id', $id, PDO::PARAM_INT);

    // Ejecutamos la consulta
    $pdostmt->execute();

    // Indicamos el tipo de fetch para el resultado
    $result = $pdostmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolvemos el resultado, convertido a JSON
    echo json_encode($result);
} else {
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
}
?>