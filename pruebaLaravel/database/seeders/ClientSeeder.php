<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;
class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $client = new Client();

        $client->name = "Niggel";
        $client->phone_number = "6121190766";
        $client->email = "nial_19@alu.uabcs.mx";

        $client->save();

        $client = new Client();

        $client->name = "Alexis";
        $client->phone_number = "6121435855";
        $client->email = "niggel.x3m@gmail.com";

        $client->save();
    }
}
