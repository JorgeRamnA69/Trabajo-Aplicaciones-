<?php
    //declaracion de variables y conexion con la base de datos
    $host='localhost' ;
    $dbName='aplicaciones_web' ;
    $username='postgres' ;
    $password='1234' ;
    
    $db=pg_connect("host=$host dbname=$dbname user=$nombre password=$contrasenia");

    $nombre=$_GET['nombre'];
    $contrasenia=$_GET['contrasenia'];
    $correo=$_GET['correo'];
    $fecha=$_GET['fecha'];
    $telefono=$_GET['telefono'];
    $dni=$_GET['dni'];
    $genero=$_GET['genero'];
    $id;

    $query="INSERT INTO usuarios (nombre, fecha_nacimiento, genero, correo, contrasenia, numero_telefono, dni) VALUES ('$nombre', '$fecha', '$genero', '$correo', '$contrasenia', '$telefono', '$dni')";
    $result=pg_query($db,$query);

    if ($result){
        echo "Usuario registrado;";
    }else{
        echo "Error al Registrar";
    }
?>