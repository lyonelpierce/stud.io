<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoryRecords = [
            ['name'=>'Corbatas', 'section_id'=>1, 'status'=>1, 'image'=>'', 'description'=>'Pantalones de hombre'],
            ['name'=>'Vestidos', 'section_id'=>2, 'status'=>1, 'image'=>'', 'description'=>'Vestidos de mujer'],
            ['name'=>'Baberos', 'section_id'=>3, 'status'=>1, 'image'=>'', 'description'=>'Baberos de niños'],
        ];
        Category::insert($categoryRecords);
    }
}
