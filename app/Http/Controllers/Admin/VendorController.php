<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use App\Models\State;
use App\Models\City;
use App\Models\VendorsBankDetail;
use App\Models\VendorsBusinessDetail;
use Illuminate\Http\Request;
use Auth;
use Hash;
use Image;

class VendorController extends Controller
{
    // Dashboard
    public function dashboard()
    {
        return view('admin.dashboard');
    }

    // Update Vendor Details
    public function updateVendorDetails(Request $request) {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'accountFirstName' => 'required|regex:/^[\pL\s\-]+$/u',
                'accountLastName' => 'required|regex:/^[\pL\s\-]+$/u',
                'accountAddress' => 'required',
                'accountCity' => 'required',
                'accountState' => 'required',
                'accountMobile' => 'required|numeric|digits:8',
                'accountDocument' => 'required|numeric|digits:10',
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
                'accountDocument.required' => 'Número de cedula es requerido',
                'accountDocument.numeric' => 'Número de cedula inválido',
                'accountDocument.digits' => 'Número de cedula debe contener 10 digitos',
                'accountMobile.digits' => 'Número de teléfono debe contener 8 digitos',
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
                        $imagePath = 'vendor/images/photos/'.$imageName;
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

            Vendor::where('id', Auth::guard('vendor')->user()->id)->update(['firstname'=>$data['accountFirstName'], 'lastname'=>$data['accountLastName'], 'document'=>$data['accountDocument'], 'address'=>$data['accountAddress'], 'city'=>$data['accountCity'], 'state'=>$data['accountState'], 'mobile'=>$data['accountMobile'], 'image'=>$imageName, 'description'=>$data['accountDescription']]);

            return redirect()->back()->with('success_message', 'Información Actualizada!');
        }

        $adminDetails = Vendor::where('email', Auth::guard('vendor')->user()->email)->first()->toArray();

        $states = State::get()->toArray();
        $selectedState = State::where('name', $adminDetails['state'])->first()->toArray();
        $cities = City::where('state_id', $selectedState['id'])->get()->toArray();

        return view('admin.settings.account')->with(compact('adminDetails', 'states', 'cities'));
    }

    // Update Vendor Studio Details
    public function updateVendorStudioDetails(Request $request) {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'studioName' => 'required|regex:/^[\pL\s\-]+$/u',
                'studioAddress' => 'required',
                'studioCity' => 'required',
                'studioState' => 'required',
                'studioMobile' => 'required|numeric|digits:8',
                'studioRuc' => 'nullable|numeric|digits:10',
                'studioUrl' => 'nullable|url',
            ];

            $customMessages = [
                'studioName.required' => 'Nombre del studio es requerido',
                'studioName.regex' => 'Nombre del studio inválido',
                'studioAddress.required' => 'Dirección del studio es requerida',
                'studioCity.required' => 'Ciudad del studio es requerida',
                'studioState.required' => 'Provincia del studio es requerida',
                'studioMobile.required' => 'Número de teléfono del studio es requerido',
                'studioMobile.numeric' => 'Número de teléfono del studio inválido',
                'studioMobile.digits' => 'Número de teléfono del studio debe contener 8 digitos',
                'studioRuc.numeric' => 'Número de RUC inválido',
                'studioRuc.digits' => 'Número de RUC debe contener 13 digitos',
            ];

            $this->validate($request, $rules, $customMessages);

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
                        $imagePath = 'vendor/images/logos/'.$imageName;
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

            VendorsBusinessDetail::where('vendor_id', Auth::guard('vendor')->user()->id)->update(['studio_name'=>$data['studioName'], 'studio_address'=>$data['studioAddress'], 'studio_city'=>$data['studioCity'], 'studio_state'=>$data['studioState'], 'studio_mobile'=>$data['studioMobile'], 'studio_description'=>$data['studioDescription'], 'studio_ruc'=>$data['studioRuc'], 'studio_website'=>$data['studioWebsite'], 'studio_logo'=>$imageName]);

            return redirect()->back()->with('success_message', 'Información Actualizada!');
        }

        $adminDetails = VendorsBusinessDetail::where('vendor_id', Auth::guard('vendor')->user()->id)->first()->toArray();

        $states = State::get()->toArray();
        $selectedState = State::where('name', $adminDetails['studio_state'])->first()->toArray();
        $cities = City::where('state_id', $selectedState['id'])->get()->toArray();

        return view ('admin.settings.studio')->with(compact('adminDetails', 'states', 'cities'));
    }

    // New Studio
    public function newStudio(Request $request) {
        $data = $request->input('selectedRadio');
    }

    // Update Vendor Bank Details
    public function updateVendorBankDetails(Request $request) {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'bankName' => 'required|regex:/^[\pL\s\-]+$/u',
                'bankAccountType' => 'required|regex:/^[\pL\s\-]+$/u',
                'bankAccountName' => 'required|regex:/^[\pL\s\-]+$/u',
                'bankAccountNumber' => 'required|numeric',
                'bankDocumentNumber' => 'required|numeric',
            ];

            $customMessages = [
                'bankName.required' => 'Nombre del banco es requerido',
                'bankName.regex' => 'Nombre del banco inválido',
                'bankAccountType.required' => 'Tipo de cuenta es requerido',
                'bankAccountType.regex' => 'Tipo de cuenta inválido',
                'bankAccountName.required' => 'Nombre de la cuenta es requerido',
                'bankAccountName.regex' => 'Nombre de la cuenta inválido',
                'bankAccountNumber.required' => 'Número de cuenta es requerido',
                'bankAccountNumber.numeric' => 'Número de cuenta inválido',
                'bankDocumentNumber.required' => 'Número de documento es requerido',
                'bankDocumentNumber.numeric' => 'Número de documento inválido',
            ];

            $this->validate($request, $rules, $customMessages);

            VendorsBankDetail::where('vendor_id', Auth::guard('vendor')->user()->id)->update(['bank_name'=>$data['bankName'], 'bank_account_type'=>$data['bankAccountType'], 'bank_account_name'=>$data['bankAccountName'], 'bank_account_number'=>$data['bankAccountNumber'], 'bank_account_document'=>$data['bankDocumentNumber']]);
            
            return redirect()->back()->with('success_message', 'Información Actualizada!');
        }
        $adminDetails = VendorsBankDetail::where('vendor_id', Auth::guard('vendor')->user()->id)->first()->toArray();

        return view('admin.settings.bank')->with(compact('adminDetails'));
    }

    // Update Vendor Password
    public function updateVendorPassword(Request $request) {
        if($request->isMethod('post')){
            $data = $request->all();

            $rules = [
                'accountCurrentPassword' => 'required',
                'accountNewPassword' => 'required|min:8',
                'accountConfirmPassword' => 'required',
            ];

            $customMessages = [
                'accountCurrentPassword.required' => 'Contraseña actual es requerida',
                'accountNewPassword.required' => 'Nueva contraseña es requerida',
                'accountNewPassword.min' => 'La nueva contraseña debe tener al menos 8 caracteres',
                'accountConfirmPassword.required' => 'Confirmación de contraseña es requerida',
            ];

            $this->validate($request, $rules, $customMessages);

            if(Hash::check($data['accountCurrentPassword'], Auth::guard('vendor')->user()->password)){
                if($data['accountConfirmPassword'] == $data['accountNewPassword']){
                    Vendor::where('id', Auth::guard('vendor')->user()->id)->update(['password'=>bcrypt($data['accountNewPassword'])]);
                    return redirect()->back()->with('success_message', 'Contraseña Actualizada!');
                } else{
                    return redirect()->back()->with('error_message', 'La nueva contraseña y la confirmación de contraseña no coinciden!');
                }
            } else{
                return redirect()->back()->with('error_message', 'Contraseña actual incorrecta!');
            }
        }
        $adminDetails = Vendor::where('email', Auth::guard('vendor')->user()->email)->first()->toArray();
        return view('admin.settings.security')->with(compact('adminDetails'));
    }
}
