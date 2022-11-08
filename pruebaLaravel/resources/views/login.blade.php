<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        @if (Auth::user())
            {{Auth::user()->name}}
        @endif
    </h1>
    <form method="post" action="{{url('login/')}}">
        @csrf

        <label for="">Correo: </label>
        <input type="email" placeholder="Correo" name="email">

        <br><br>
        <label for="">Contraseña</label>
        <input type="password" name="password" placeholder="Contraseña">
        <br><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>