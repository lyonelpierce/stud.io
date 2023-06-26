<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\State;
use App\Models\City;
use App\Models\Vendor;
use App\Models\Section;
use App\Models\Category;
use Illuminate\Http\Request;
use Auth;
use Image;
use Hash;

class AdminController extends Controller
{

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
                'accountMobile' => 'required|numeric|digits:8',
                'accountDocument' => 'required|numeric|digits:10'
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
                'accountMobile.digits' => 'Número de teléfono debe contener 8 digitos'
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

            Admin::where('id', Auth::guard('admin')->user()->id)->update(['firstname'=>$data['accountFirstName'], 'lastname'=>$data['accountLastName'], 'address'=>$data['accountAddress'], 'city'=>$data['accountCity'], 'state'=>$data['accountState'], 'mobile'=>$data['accountMobile'], 'image'=>$imageName, 'document'=>$data['accountDocument']]);

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

    // User List
    public function userList()
    {
        $vendors = Vendor::with(['vendorBusinessDetails', 'vendorBankDetails'])->get()->toArray();
        return view('admin.users.vendors')->with(compact('vendors'));
    }

    // User Status
    public function userStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            Vendor::where('id', $data['userId'])->update(['status'=>$data['status']]);
        }
    }

    // Delete Vendor
    public function userDelete(Request $request){
        if($request->ajax()){
            $data = $request->all();
            $vendor = Vendor::with(['vendorBankDetails', 'vendorBusinessDetails'])->find($data['userId']);

            // Delete the vendorBankDetails and vendorBusinessDetails along with the vendor
            $vendor->vendorBankDetails()->delete();
            $vendor->vendorBusinessDetails()->delete();
            $vendor->delete();
            
            return response()->json(['success_message' => 'Usuario eliminado!']);
        }
        return response()->json(['error_message' => 'Cuenta no encontrada!']);
    }

    // Section List
    public function sectionList(Request $request)
    {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'sectionName' => 'required',
                'sectionDescription' => 'required',
                'sectionImage' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ];

            $customMessages = [
                'sectionName.required' => 'Nombre de categoría es requerido',
                'sectionDescription.required' => 'Descripción de categoría es requerida',
                'sectionImage.image' => 'Formato de imagen inválido',
                'sectionImage.mimes' => 'Formato de imagen inválido',
                'sectionImage.max' => 'Tamaño de imagen excedido',
            ];

            $this->validate($request, $rules, $customMessages);

            // Upload Image
            if ($request->hasFile('sectionImage')) {
                $image_tmp = $request->file('sectionImage');
                if ($image_tmp->isValid()) {
                    // Check if the file is an image
                    $allowedTypes = ['image/jpeg', 'image/png'];
                    if (in_array($image_tmp->getMimeType(), $allowedTypes)) {
                        // Get Image Extension
                        $extension = $image_tmp->getClientOriginalExtension();
                        // Generate New Image Name
                        $imageName = rand(111, 99999).'.'.$extension;
                        $imagePath = 'catalog/sections/images/'.$imageName;
                        // Upload Image
                        Image::make($image_tmp)->resize(600, 600)->save($imagePath);
                    } else {
                        // File is not an image, handle the error accordingly
                        return redirect()->back()->with('error_message', 'El archivo seleccionado no es una imagen válida.');
                    }
                } 
            } else{
                $imageName = "";
            }

            // Add section
            $section = new Section();
            $section->name = $data['sectionName'];
            $section->description = $data['sectionDescription'];
            $section->image = $imageName;
            $section->status = 1;
            $section->save();

            return redirect()->back()->with('success_message', 'Sección agregada!');
        }

        $sections = Section::with(['categories'])->get()->toArray();
        // echo "<pre>"; print_r($categories); die;
        return view('admin.catalog.sections')->with(compact('sections'));
    }

    // Section Status
    public function sectionStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            section::where('id', $data['sectionId'])->update(['status'=>$data['status']]);
        }
    }

    // Delete Section
    public function sectionDelete(Request $request){
        if($request->ajax()){
            $data = $request->all();
            $section = Section::find($data['sectionId']);

            // Delete the section
            $section->delete();
            return response()->json(['success_message' => 'Sección eliminada!']);
        }
        return response()->json(['error_message' => 'Sección no encontrada!']);
    }
    

    // Category List
    public function categoryList(Request $request)
    {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'categoryName' => 'required',
                'categoryDescription' => 'required',
                'categoryImage' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ];

            $customMessages = [
                'categoryName.required' => 'Nombre de categoría es requerido',
                'categoryDescription.required' => 'Descripción de categoría es requerida',
                'categoryImage.image' => 'Formato de imagen inválido',
                'categoryImage.mimes' => 'Formato de imagen inválido',
                'categoryImage.max' => 'Tamaño de imagen excedido',
            ];

            $this->validate($request, $rules, $customMessages);

            // Upload Image
            if ($request->hasFile('categoryImage')) {
                $image_tmp = $request->file('categoryImage');
                if ($image_tmp->isValid()) {
                    // Check if the file is an image
                    $allowedTypes = ['image/jpeg', 'image/png'];
                    if (in_array($image_tmp->getMimeType(), $allowedTypes)) {
                        // Get Image Extension
                        $extension = $image_tmp->getClientOriginalExtension();
                        // Generate New Image Name
                        $imageName = rand(111, 99999).'.'.$extension;
                        $imagePath = 'category/images/'.$imageName;
                        // Upload Image
                        Image::make($image_tmp)->resize(600, 600)->save($imagePath);
                    } else {
                        // File is not an image, handle the error accordingly
                        return redirect()->back()->with('error_message', 'El archivo seleccionado no es una imagen válida.');
                    }
                } 
            } else{
                $imageName = "";
            }

            // Add Category
            $category = new Category();
            $category->name = $data['categoryName'];
            $category->description = $data['categoryDescription'];
            $category->image = $imageName;
            $category->status = 1;
            $category->save();

            return redirect()->back()->with('success_message', 'Categoría agregada!');
        }

        $categories = Category::with(['section'])->get()->toArray();
        // echo "<pre>"; print_r($categories); die;
        return view('admin.catalog.categories')->with(compact('categories'));
    }

    // Category Status
    public function categoryStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            Category::where('id', $data['categoryId'])->update(['status'=>$data['status']]);
        }
    }

    // Delete Category
    public function categoryDelete(Request $request){
        if($request->ajax()){
            $data = $request->all();
            $category = Category::find($data['categoryId']);

            // Delete the category
            $category->delete();
            return response()->json(['success_message' => 'Categoría eliminada!']);
        }
        return response()->json(['error_message' => 'Categoría no encontrada!']);
    }
}
