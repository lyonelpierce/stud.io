<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Section;

class CategoryController extends Controller
{
    // Category List
    public function categoryList(Request $request)
    {
        if($request->isMethod('post')){
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;
            $rules = [
                'categorySection' => 'required',
                'categoryName' => 'required',
                'categoryDescription' => 'required',
                'categoryImage' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ];

            $customMessages = [
                'categorySection.required' => 'Una sección es requerida',
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
            $category->section_id = $data['categorySection'];
            $category->name = $data['categoryName'];
            $category->description = $data['categoryDescription'];
            $category->image = $imageName;
            $category->status = 1;
            $category->save();

            return redirect()->back()->with('success_message', 'Categoría agregada!');
        }

        $sections = Section::get()->toArray();
        // echo "<pre>"; print_r($sections); die;
        $categories = Category::with(['section'])->get()->toArray();
        // echo "<pre>"; print_r($categories); die;
        return view('admin.catalog.categories')->with(compact('categories', 'sections'));
    }

    // Category Status
    public function categoryStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            Category::where('id', $data['categoryId'])->update(['status'=>$data['status']]);
        }
    }

    // Update Category
    public function categoryUpdate(Request $request, $id){
        if($request->isMethod('get')){
            $category = Category::find($id);
            // echo "<pre>"; print_r($category); die;
            return response()->json($category);
        } else {
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;

            $rules = [
                'categorySection' => 'required',
                'categoryName' => 'required',
                'categoryDescription' => 'required',
                'categoryImage' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ];

            $customMessages = [
                'categorySection.required' => 'Una sección es requerida',
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
                        $imagePath = 'catalog/category/images/'.$imageName;
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

            // Update category
            $category = category::find($id);
            $category->section_id = $data['categorySection'];
            $category->name = $data['categoryName'];
            $category->description = $data['categoryDescription'];
            $category->image = $imageName;
            $category->status = 1;
            $category->save();

            return redirect()->back()->with('success_message', 'Categoría actualizada!');
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
