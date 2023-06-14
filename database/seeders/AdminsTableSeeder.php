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
            ['id'=>1, 'name'=>'Lyonel Pierce', 'type'=>'admin', 'vendor_id'=>0, 'mobile'=>'+19293746098', 'location'=>'', 'email'=>'lyonel@live.com', 'password'=>'$2a$12$TJK2MFLyEMeFVhNqF7rCseiwBEnXVoVJ9mii7sH2lxrwKaVih/FPq', 'image'=>'', 'status'=>1]
        ];
        Admin::insert($adminRecords);
    }
}
