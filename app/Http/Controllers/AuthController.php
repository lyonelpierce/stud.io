<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    // Login
    public function login(Request $request) 
    {
        if($request->isMethod('post')) {
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'email' => 'required|email|max:255',
                'password' => 'required',
            ];

            $customMessages = [
                'email.required' => 'Correo Electrónico es requerido',
                'email.email' => 'Correo Electrónico inválido',
                'password.required' => 'Contraseña es requerida',
            ];

            $this->validate($request, $rules, $customMessages);

            if(Auth::guard('admin')->attempt(['email'=>$data['email'], 'password'=>$data['password'], 'status'=>1])) {
                return redirect('admin/dashboard');
            } elseif (Auth::guard('vendor')->attempt(['email' => $data['email'], 'password' => $data['password'], 'status' => 1])) {
                return redirect('vendor/dashboard');
            } 
            else {
                return redirect()->back()->with('error_message', 'Correo Electrónico o Contraseña inválidos');
            }
        }
        return view('admin.login');
    }

    // Logout
    public function logout()
    {
        if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
        } elseif (Auth::guard('vendor')->check()) {
            Auth::guard('vendor')->logout();
        }
    
        return redirect('login');
    }

}
