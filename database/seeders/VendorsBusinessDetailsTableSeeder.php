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
            ['vendor_id'=>1, 'store_name'=>'Piramide', 'store_description'=>'', 'store_address'=>'Samanes', 'store_city'=>'Guayaquil', 'store_state'=>'Guayas', 'store_mobile'=>'', 'store_website'=>'', 'store_ruc'=>'', 'store_logo'=>''],
            ['vendor_id'=>2, 'store_name'=>'Eri Tattoo', 'store_description'=>'', 'store_address'=>'Samanes', 'store_city'=>'Guayaquil', 'store_state'=>'Guayas', 'store_mobile'=>'', 'store_website'=>'', 'store_ruc'=>'', 'store_logo'=>'']
        ];
        VendorsBusinessDetail::insert($vendorBusinessRecords);
    }
}
