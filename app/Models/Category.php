<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Section;

class Category extends Model
{
    use HasFactory;
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }

    protected static function boot()
    {
        parent::boot();

        // Listen for the "deleting" event on the Category model
        static::deleting(function ($category) {
            // Delete related products
            $category->products()->each(function ($product) {
                $product->delete();
            });
        });
    }
}
