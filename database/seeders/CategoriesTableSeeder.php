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
            ['name'=>'Punteado', 'status'=>1, 'image'=>'', 'description'=>'Utiliza puntos para crear diseños.'],
            ['name'=>'Black & Grey', 'status'=>1, 'image'=>'', 'description'=>'Tatuajes en blanco y negro con sombreado.'],
            ['name'=>'Japones', 'status'=>1, 'image'=>'', 'description'=>'Inspirado en arte japonés con símbolos y personajes tradicionales.'],
            ['name'=>'Acuarela', 'status'=>1, 'image'=>'', 'description'=>'Colores vibrantes y difuminados como acuarelas.'],
            ['name'=>'Tribal', 'status'=>1, 'image'=>'', 'description'=>'Diseños abstractos y geométricos, a menudo en negro.'],
            ['name'=>'Realista', 'status'=>1, 'image'=>'', 'description'=>'Detalles y fidelidad a la realidad en retratos y elementos.'],
            ['name'=>'Surrealista', 'status'=>1, 'image'=>'', 'description'=>'Elementos fantásticos e ilógicos en diseños.'],
            ['name'=>'Anime', 'status'=>1, 'image'=>'', 'description'=>'Inspirado en el estilo de dibujo japonés de anime y manga.'],
            ['name'=>'Minimalista', 'status'=>1, 'image'=>'', 'description'=>'Diseños simples y con líneas limpias, enfocados en la simplicidad.'],
            ['name'=>'New School', 'status'=>1, 'image'=>'', 'description'=>'Estilo audaz y colorido, con caricaturas y elementos de cómic.'],
            ['name'=>'Tradicional', 'status'=>1, 'image'=>'', 'description'=>'Basado en los tatuajes clásicos occidentales, con líneas gruesas y colores vivos.'],
            ['name'=>'Neo Tradicional', 'status'=>1, 'image'=>'', 'description'=>'Una versión contemporánea del estilo tradicional, con mayor detalle y sombreado.'],
            ['name'=>'Grafitti', 'status'=>1, 'image'=>'', 'description'=>'Letras y diseños inspirados en el arte callejero y el graffiti.'],
            ['name'=>'Goticos', 'status'=>1, 'image'=>'', 'description'=>'Diseños oscuros y macabros, con elementos como calaveras y símbolos góticos.'],
            ['name'=>'Escrito', 'status'=>1, 'image'=>'', 'description'=>'Tatuajes que presentan palabras, frases o citas escritas en diferentes estilos de letras.'],
            ['name'=>'Geometricos', 'status'=>1, 'image'=>'', 'description'=>'Diseños basados en formas geométricas, como triángulos, círculos y líneas rectas.'],
        ];
        Category::insert($categoryRecords);
    }
}
