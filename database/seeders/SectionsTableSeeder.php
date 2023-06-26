<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Section;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sectionRecords = [
            ['name'=>'Hombres', 'description'=>'Articulos para hombre', 'image'=>'', 'status'=>1],
            ['name'=>'Mujeres', 'description'=>'Articulos para mujer', 'image'=>'', 'status'=>1],
            ['name'=>'Niños', 'description'=>'Articulos para niños', 'image'=>'', 'status'=>1],
        ];
        Section::insert($sectionRecords);
    }
}
