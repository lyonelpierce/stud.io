<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Section extends Model
{
    use HasFactory;
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    protected static function boot()
    {
        parent::boot();

        // Listen for the "deleting" event on the Section model
        static::deleting(function ($section) {
            // Delete related categories
            $section->categories()->each(function ($category) {
                $category->delete();
            });
        });
    }
}
