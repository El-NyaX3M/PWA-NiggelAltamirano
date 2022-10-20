<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index(){
        echo "hola";
    }

    public function show($id){
        echo $id;
    }

    public function create(){
        return view('create_user');
    }
    
    public function store(Request $request){
        echo $request->name;
    }
}
