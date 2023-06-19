<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\VendorsBusinessDetail;

class VendorsBusinessDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vendorBusinessRecords = [
            ['id'=>1, 'vendor_id'=>1, 'studio_name'=>'Piramide', 'studio_description'=>'', 'studio_address'=>'Samanes', 'studio_city'=>'Guayaquil', 'studio_state'=>'Guayas', 'studio_mobile'=>'', 'studio_website'=>'', 'studio_ruc'=>'', 'studio_logo'=>'']
        ];
        VendorsBusinessDetail::insert($vendorBusinessRecords);
    }
}
