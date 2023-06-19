<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vendor;

class VendorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vendorRecords = [
            ['firstname'=>'Lyonel', 'lastname'=>'Alvarado', 'type'=>'Tatuador', 'state'=>'Guayas', 'city'=>'Guayaquil', 'address'=>'Garzota 2', 'mobile'=>'82080787', 'document'=>'0923456789', 'email'=>'xlyonelx@gmail.com', 'password'=>'$2a$12$Y4y1l4qYExsz0UP0jfHqPeYs78zt6gS47SX8izM9V0DWutrRvdL0W', 'image'=>'', 'description'=>'', 'status'=>1],
        ];
        Vendor::insert($vendorRecords);
    }
}
