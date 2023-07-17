<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;

class SectionController extends Controller
{
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
}
