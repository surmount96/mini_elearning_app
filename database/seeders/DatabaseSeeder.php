<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Admin Support',
            'email' => 'admin@hesegacademy.com.ng',
            'role' => 'admin',
            'password' => Hash::make('P1O2W3E4R5@')
        ]);
    }
}
