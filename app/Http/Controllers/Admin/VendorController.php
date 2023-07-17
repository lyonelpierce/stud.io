<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vendor;

class VendorController extends Controller
{
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
}
