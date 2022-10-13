<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">

</head>
<body>
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled">Disabled</a>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 d-none d-sm-block">
                <aside class="bg-light">
                    <div class="navbar-nav">
                        <a href="" class="nav-link">Opción 1</a>
                        <a href="" class="nav-link">Opción 2</a>
                        <div class="nav-item dropdown">
                            <a href="" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Opciones extra</a>
                            <div class="dropdown-menu">
                            <a href="" class="dropdown-item">extra 1</a>
                            <a href="" class="dropdown-item">extra 2</a>
                            <a href="" class="dropdown-item">extra 3</a>
                        </div>
                        </div>
                        <a href="" class="nav-link">Opción 4</a>
                    </div>
                </aside>
            </div>
        
            
            <div class="col-lg-10 col-sm-12">
                <div class="row">
                    <?php for ($i = 0; $i < 12; $i++): ?>
                    <div class="col-md-3 col-sm-10 p-2">
                        <div class="card mb-1">
                            <img src="" alt="" class="card-img-top img-fluid">
                            <div class="card-body">
                                <h4 class="card-title text-center">Nombre Prod.</h4>
                                <h5 class="card-subtitle mb-2 text-muted text-center">Categoría</h5>
                                <p class="card-text">información del producto.</p>
                                <div class="row">
                                    <a href="" class="btn btn-warning col-6">Editar</a>
                                    <a href="" class="btn btn-danger col-6">Eliminar</a>
                                    <a href="" class="btn btn-info col-12">Detalles</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>    
</body>
</html>