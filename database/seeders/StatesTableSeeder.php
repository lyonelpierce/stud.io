<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\State;


class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stateRecords = [
            ['id' => 1, 'provincia' => 'Azuay'],
            ['id' => 2, 'provincia' => 'Bolívar'],
            ['id' => 3, 'provincia' => 'Cañar'],
            ['id' => 4, 'provincia' => 'Carchi'],
            ['id' => 5, 'provincia' => 'Cotopaxi'],
            ['id' => 6, 'provincia' => 'Chimborazo'],
            ['id' => 7, 'provincia' => 'El Oro'],
            ['id' => 8, 'provincia' => 'Esmeraldas'],
            ['id' => 9, 'provincia' => 'Guayas'],
            ['id' => 10, 'provincia' => 'Imbabura'],
            ['id' => 11, 'provincia' => 'Loja'],
            ['id' => 12, 'provincia' => 'Los Rios'],
            ['id' => 13, 'provincia' => 'Manabi'],
            ['id' => 14, 'provincia' => 'Morona Santiago'],
            ['id' => 15, 'provincia' => 'Napo'],
            ['id' => 16, 'provincia' => 'Pastaza'],
            ['id' => 17, 'provincia' => 'Pichincha'],
            ['id' => 18, 'provincia' => 'Tungurahua'],
            ['id' => 19, 'provincia' => 'Zamora Chinchipe'],
            ['id' => 20, 'provincia' => 'Galápagos'],
            ['id' => 21, 'provincia' => 'Sucumbíos'],
            ['id' => 22, 'provincia' => 'Orellana'],
            ['id' => 23, 'provincia' => 'Santo Domingo de Los Tsáchilas'],
            ['id' => 24, 'provincia' => 'Santa Elena'],
        ];
        State::insert($stateRecords);
    }
}
