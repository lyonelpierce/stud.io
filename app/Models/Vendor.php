<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Models\VendorsBankDetail;
use App\Models\VendorsBusinessDetail;

class Vendor extends Authenticatable
{
    use HasFactory;
    public function vendorBankDetails()
    {
        return $this->hasOne(VendorsBankDetail::class);
    }

    public function vendorBusinessDetails()
    {
        return $this->hasOne(VendorsBusinessDetail::class);
    }
}
