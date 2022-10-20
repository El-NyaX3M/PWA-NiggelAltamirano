<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    //
    public function index(){
        return User::all();
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
