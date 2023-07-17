<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // Product List
    public function productList()
    {
        $products = Product::with(['section', 'category', 'vendor'])->get()->toArray();
        return view('admin.catalog.products')->with(compact('products'));
    }

    // Product Status
    public function productStatus(Request $request)
    {
        if($request->ajax()){
            $data = $request->all();
            Product::where('id', $data['productId'])->update(['status'=>$data['status']]);
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
