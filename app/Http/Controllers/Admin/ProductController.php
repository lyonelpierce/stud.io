<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Section;
use App\Models\Category;
use Image;

class ProductController extends Controller
{
    // Product List
    public function productList()
    {
        $products = Product::with(['section', 'category', 'vendor'])->get()->toArray();
        $sections = Section::get()->toArray();
        $categories = Category::get()->toArray();
        return view('admin.catalog.products')->with(compact('products', 'sections', 'categories'));
    }

    // Product Status
    public function productStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            Product::where('id', $data['productId'])->update(['status'=>$data['status']]);
        }
    }

    // Product Update
    public function productUpdate(Request $request, $id)
    {
        if($request->isMethod('get')){
            $product = Product::with(['section', 'category', 'vendor'])->where('id', $id)->first()->toArray();
            return response()->json($product);
        } else {
            $data = $request->all();
            // echo "<pre>"; print_r($data); die;

            $rules = [
                'productSection' => 'required',
                'productCategory' => 'required',
                'productName' => 'required',
                'productPrice' => 'required',
                'productDiscount' => 'required',
                'productInventory' => 'required|numeric',
                'productDescription' => 'required',
                'metaTitle' => 'required',
                'metaDescription' => 'required',
                'metaKeyword' => 'required',
                'productImage' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ];

            $customMessages = [
                'productSection.required' => 'Una sección es requerida',
                'productCategory.required' => 'Una categoría es requerida',
                'productName.required' => 'Nombre de producto es requerido',
                'productPrice.required' => 'Precio de producto es requerido',
                'productDiscount.required' => 'Descuento de producto es requerido',
                'productInventory.required' => 'Inventario de producto es requerido',
                'productInventory.numeric' => 'Inventario de producto debe ser numérico',
                'productDescription.required' => 'Descripción de producto es requerida',
                'metaTitle.required' => 'Meta título es requerido',
                'metaDescription.required' => 'Meta descripción es requerida',
                'metaKeyword.required' => 'Meta palabras clave es requerido',
                'productImage.image' => 'Formato de imagen inválido',
                'productImage.mimes' => 'Formato de imagen inválido',
                'productImage.max' => 'Tamaño de imagen excedido',
            ];

            $this->validate($request, $rules, $customMessages);

            // Upload Image
            if ($request->hasFile('productImage')) {
                $image_tmp = $request->file('productImage');
                if ($image_tmp->isValid()) {
                    // Check if the file is an image
                    $allowedTypes = ['image/jpeg', 'image/png'];
                    if (in_array($image_tmp->getMimeType(), $allowedTypes)) {
                        // Get Image Extension
                        $extension = $image_tmp->getClientOriginalExtension();
                        // Generate New Image Name
                        $imageName = rand(111, 99999).'.'.$extension;
                        $imagePath = 'catalog/products/images/'.$imageName;
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

            $product = Product::find($id);
            // echo "<pre>"; print_r($data); die;
            $product->section_id = $data['productSection'];
            $product->category_id = $data['productCategory'];
            $product->product_name = $data['productName'];
            $product->product_price = $data['productPrice'];
            $product->product_discount = $data['productDiscount'];
            $product->product_inventory = $data['productInventory'];
            $product->product_description = $data['productDescription'];
            $product->meta_title = $data['metaTitle'];
            $product->meta_description = $data['metaDescription'];
            $product->meta_keywords = $data['metaKeyword'];
            if ($imageName != "") {
                $product->product_image = $imageName;
            }
            if (isset($data['isFeatured'])) {
                $product->is_featured = "Yes";
            } else {
                $product->is_featured = "No";
            }
            $product->status = 1;
            $product->save();
            return redirect()->back()->with('success_message', 'Producto actualizado!');
        }
    }

    // Delete Product
    public function productDelete(Request $request){
        if($request->ajax()){
            $data = $request->all();
            $product = Product::find($data['productId']);

            // Delete the product
            $product->delete();
            return response()->json(['success_message' => 'Producto eliminado!']);
        }
        return response()->json(['error_message' => 'Producto no encontrado!']);
    }
}
