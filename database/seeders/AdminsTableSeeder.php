<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRecords = [
            ['id'=>1, 'firstname'=>'Lyonel', 'lastname' => 'Pierce', 'type'=>'Super Admin', 'state'=>'Guayas', 'city'=>'Guayaquil', 'mobile'=>'82080787', 'address'=>'Orquideas Mz 66 V 7', 'email'=>'lyonel@live.com', 'password'=>'$2a$12$TJK2MFLyEMeFVhNqF7rCseiwBEnXVoVJ9mii7sH2lxrwKaVih/FPq', 'image'=>'', 'status'=>1, 'document'=>'']
        ];
        Admin::insert($adminRecords);
    }
}
