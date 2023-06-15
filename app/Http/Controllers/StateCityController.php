<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\City;
use App\Models\State;

class StateCityController extends Controller
{
    public function getCitiesByState($stateName)
    {
        $states = State::where('name', $stateName)->first();
        $cities = City::where('state_id', $states['id'])->get();
        return response()->json($cities);
    }
}
