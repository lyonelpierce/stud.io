<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\State;
use App\Models\City;
use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
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
                'email.required' => 'Email is required',
                'email.email' => 'Email is invalid',
                'password.required' => 'Password is required',
            ];

            $this->validate($request, $rules, $customMessages);

            if(Auth::guard('admin')->attempt(['email'=>$data['email'], 'password'=>$data['password'], 'status'=>1])) {
                return redirect('admin/dashboard');
            } else {
                return redirect()->back()->with('error_message', 'Invalid Username or Password');
            }
        }
        return view('admin.login');
    }

    // Logout
    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('admin/login');
    }

    // Dashboard
    public function dashboard()
    {
        return view('admin.dashboard');
    }

    // Update Admin Details
    public function updateAdminDetails(Request $request)
    {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'accountFirstName' => 'required|regex:/^[\pL\s\-]+$/u',
                'accountLastName' => 'required|regex:/^[\pL\s\-]+$/u',
                'accountAddress' => 'required',
                'accountCity' => 'required',
                'accountState' => 'required',
                'accountMobile' => 'required|numeric',
            ];

            $customMessages = [
                'accountFirstName.required' => 'Nombre es requerido',
                'accountFirstName.regex' => 'Nombre invalido',
                'accountLastName.required' => 'Apellido es requerido',
                'accountLastName.regex' => 'Apellido invalido',
                'accountAddress.required' => 'Dirección es requerida',
                'accountCity.required' => 'Ciudad es requerida',
                'accountState.required' => 'Provincia es requerida',
                'accountMobile.required' => 'Número de teléfono es requerido',
                'accountMobile.numeric' => 'Número de teléfono inválido',
            ];

            $this->validate($request, $rules, $customMessages);

            Admin::where('id', Auth::guard('admin')->user()->id)->update(['firstname'=>$data['accountFirstName'], 'lastname'=>$data['accountLastName'], 'address'=>$data['accountAddress'], 'city'=>$data['accountCity'], 'state'=>$data['accountState'], 'mobile'=>$data['accountMobile']]);

            return redirect()->back()->with('success_message', 'Información Actualizada!');
        }

        $adminDetails = Admin::where('email', Auth::guard('admin')->user()->email)->first()->toArray();

        $states = State::get()->toArray();
        $selectedState = State::where('name', $adminDetails['state'])->first()->toArray();

        $cities = City::where('state_id', $selectedState['id'])->get()->toArray();
        return view('admin.settings.account')->with(compact('adminDetails', 'states', 'cities'));
    }

}
