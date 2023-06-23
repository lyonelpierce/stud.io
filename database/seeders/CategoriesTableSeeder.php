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
            ['name'=>'Punteado', 'status'=>1],
            ['name'=>'Black & Grey', 'status'=>1],
            ['name'=>'Japones', 'status'=>1],
            ['name'=>'Acuarela', 'status'=>1],
            ['name'=>'Tribal', 'status'=>1],
            ['name'=>'Realista', 'status'=>1],
            ['name'=>'Surrealista', 'status'=>1],
            ['name'=>'Anime', 'status'=>1],
            ['name'=>'Minimalista', 'status'=>1],
            ['name'=>'New School', 'status'=>1],
            ['name'=>'Tradicional', 'status'=>1],
            ['name'=>'Neo Tradicional', 'status'=>1],
            ['name'=>'Grafitti', 'status'=>1],
            ['name'=>'Goticos', 'status'=>1],
            ['name'=>'Escrito', 'status'=>1],
            ['name'=>'Geometricos', 'status'=>1],
        ];
        Category::insert($categoryRecords);
    }
}
