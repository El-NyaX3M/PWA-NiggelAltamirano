<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <h3>Clientes</h3>
        <table>
            <thead>

            </thead>
            <tbody>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            email
                        </th>
                        <th>
                            phone number
                        </th>
                    </tr>
                    <tbody>
                        @foreach($clients as $client)
                            <tr>
                                <td>
                                    {{$client->id}}
                                </td>
                                <td>
                                    {{$client->name}}
                                </td>
                                <td>
                                    {{$client->email}}
                                </td>
                                <td>
                                    {{$client->phone_number}}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
            </tbody>
        </table>
    </table>
</body>
</html>