<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class VendorController extends Controller
{
    public function dashboard()
    {
        return view('admin.dashboard');
    }
}
