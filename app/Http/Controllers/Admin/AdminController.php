<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\State;
use App\Models\City;
use Illuminate\Http\Request;
use Auth;
use Image;
use Hash;

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

            // Upload Image
            if ($request->hasFile('accountImage')) {
                $image_tmp = $request->file('accountImage');
                if ($image_tmp->isValid()) {
                    // Check if the file is an image
                    $allowedTypes = ['image/jpeg', 'image/png'];
                    if (in_array($image_tmp->getMimeType(), $allowedTypes)) {
                        // Get Image Extension
                        $extension = $image_tmp->getClientOriginalExtension();
                        // Generate New Image Name
                        $imageName = rand(111, 99999).'.'.$extension;
                        $imagePath = 'admin/images/photos/'.$imageName;
                        // Upload Image
                        Image::make($image_tmp)->resize(600, 600)->save($imagePath);
                    } else {
                        // File is not an image, handle the error accordingly
                        return redirect()->back()->with('error_message', 'El archivo seleccionado no es una imagen válida.');
                    }
                } 
            } elseif (!empty($data['currentAdminImage'])) {
                $imageName = $data['currentAdminImage'];
            } else{
                $imageName = "";
            }

            Admin::where('id', Auth::guard('admin')->user()->id)->update(['firstname'=>$data['accountFirstName'], 'lastname'=>$data['accountLastName'], 'address'=>$data['accountAddress'], 'city'=>$data['accountCity'], 'state'=>$data['accountState'], 'mobile'=>$data['accountMobile'], 'image'=>$imageName]);

            return redirect()->back()->with('success_message', 'Información Actualizada!');
        }

        $adminDetails = Admin::where('email', Auth::guard('admin')->user()->email)->first()->toArray();

        $states = State::get()->toArray();
        $selectedState = State::where('name', $adminDetails['state'])->first()->toArray();

        $cities = City::where('state_id', $selectedState['id'])->get()->toArray();
        return view('admin.settings.account')->with(compact('adminDetails', 'states', 'cities'));
    }

    // Update Admin Password
    public function updateAdminPassword(Request $request){
        if($request->isMethod('post')){
            $data = $request->all();

            $rules = [
                'accountCurrentPassword' => 'required',
                'accountNewPassword' => 'required|min:8|confirmed',
                'accountConfirmPassword' => 'required',
            ];

            $customMessages = [
                'accountCurrentPassword.required' => 'Contraseña actual es requerida',
                'accountNewPassword.required' => 'Nueva contraseña es requerida',
                'accountNewPassword.min' => 'La nueva contraseña debe tener al menos 8 caracteres',
                'accountNewPassword.confirmed' => 'La nueva contraseña y la confirmación de contraseña no coinciden',
                'accountConfirmPassword.required' => 'Confirmación de contraseña es requerida',
            ];

            $this->validate($request, $rules, $customMessages);

            if(Hash::check($data['accountCurrentPassword'], Auth::guard('admin')->user()->password)){
                if($data['accountConfirmPassword'] == $data['accountNewPassword']){
                    Admin::where('id', Auth::guard('admin')->user()->id)->update(['password'=>bcrypt($data['accountNewPassword'])]);
                    return redirect()->back()->with('success_message', 'Contraseña Actualizada!');
                } else{
                    return redirect()->back()->with('error_message', 'La nueva contraseña y la confirmación de contraseña no coinciden!');
                }
            } else{
                return redirect()->back()->with('error_message', 'Contraseña actual incorrecta!');
            }
        }
        $adminDetails = Admin::where('email', Auth::guard('admin')->user()->email)->first()->toArray();
        return view('admin.settings.security')->with(compact('adminDetails'));
    }

    // Delete Account
    public function deleteAccount(Request $request){
        return view('admin.settings.delete')->with(compact('adminDetails'));
    }

}
