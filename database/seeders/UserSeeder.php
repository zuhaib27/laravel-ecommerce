<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(['name'=> 'Admin', 'email' =>'admin@example.com', 'password' => bcrypt('password'), 'is_admin' => 1]);
        User::create(['name'=> 'Vendor', 'email' =>'vendor@example.com', 'password' => bcrypt('password'), 'is_vendor' => 1]);
        //NOTE: not a safe implemetation for full production!!! mainly for testing and demo
    }
}
