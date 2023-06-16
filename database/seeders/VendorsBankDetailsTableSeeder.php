<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\VendorsBankDetail;

class VendorsBankDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vendorBankRecords = [
            ['id'=>1, 'vendor_id'=>1, 'bank_name'=>'Pichincha', 'bank_account_number'=>'1056552661', 'bank_account_name'=>'Lyonel Alvarado', 'bank_account_type'=>'Ahorros', 'bank_account_document'=>'0922300421']
        ];
        VendorsBankDetail::insert($vendorBankRecords);
    }
}
