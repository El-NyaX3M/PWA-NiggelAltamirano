<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post" action="{{url('clients/')}}">
    @method('PUT')
        @csrf

        <label for="">Nombre: </label>
        <input type="text" placeholder="name" name="name" value ="{{$client->name}}">

        <label for="">Correo: </label>
        <input type="email" placeholder="Correo" name="email" value ="{{$client->email}}">

        <label for="">Teléfono</label>
        <input type="text" placeholder="52651321" name="phone_number" value ="{{$client->phone_number}}">

        <input type="hidden" name="id" id="" value ="{{$client->id}}">
        <button type="submit">Actualizar</button>
    </form>
</body>
</html>