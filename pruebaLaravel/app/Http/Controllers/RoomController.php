<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Module\room;

class RoomController extends Controller
{
    //
    public function index(){
        return User::all();
    }
}
