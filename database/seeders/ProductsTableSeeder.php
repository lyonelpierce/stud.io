<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productRecords = [
            ["section_id"=>3, "category_id"=>3, "vendor_id"=>1, "product_name"=>"Corbata elegante negra", "product_description"=>"", "product_inventory"=>5, "product_price"=>"10.00", "product_discount"=>"3.00", "product_image"=>"", "meta_title"=>"corbata", "meta_description"=>"", "meta_keywords"=>"", "is_featured"=>"Yes", "status"=>1]
        ];
        Product::insert($productRecords);
    }
}
