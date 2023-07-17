<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// State City Dropdown Route
Route::get('/cities/{stateId}', 'App\Http\Controllers\StateCityController@getCitiesByState');

// Shared Login Route and Logic
Route::match(['get', 'post'], 'login', 'App\Http\Controllers\AuthController@login')->name('login');
Route::get('logout', 'App\Http\Controllers\AuthController@logout')->name('logout');

// Admin Routes
Route::namespace('App\Http\Controllers\Admin')->group(function () {

    // Admin Dashboard
    Route::group(['middleware' => ['admin']], function () {
        Route::get('admin/dashboard', 'AdminController@dashboard')->name('admin.dashboard');
        Route::match(['get', 'post'], 'admin/account', 'AdminController@updateAdminDetails')->name('admin.account');
        Route::match(['get', 'post'], 'admin/security', 'AdminController@updateAdminPassword')->name('admin.security');

        Route::match(['get', 'post'], 'admin/users/vendors', 'VendorController@userList')->name('admin.users.vendors');
        Route::post('admin/users/userStatus', 'VendorController@userStatus')->name('admin.users.vendors.status');
        Route::delete('admin/users/userDelete/{userId}', 'VendorController@userDelete')->name('admin.users.vendors.delete');

        Route::match(['get', 'post'], 'admin/sections', 'SectionController@sectionList')->name('admin.sections');
        Route::post('admin/sections/sectionStatus', 'SectionController@sectionStatus')->name('admin.sections.status');
        Route::delete('admin/sections/sectionDelete/{sectionId}', 'SectionController@sectionDelete')->name('admin.sections.delete');

        Route::match(['get', 'post'], 'admin/categories', 'CategoryController@categoryList')->name('admin.categories');
        Route::post('admin/categories/categoryStatus', 'CategoryController@categoryStatus')->name('admin.categories.status');
        Route::delete('admin/categories/categoryDelete/{categoryId}', 'CategoryController@categoryDelete')->name('admin.categories.delete');

        Route::match(['get'], 'admin/products', 'ProductController@productList')->name('admin.products');
        Route::post('admin/products/productStatus', 'ProductController@productStatus')->name('admin.products.status');
        Route::delete('admin/products/productDelete/{productId}', 'ProductController@productDelete')->name('admin.products.delete');
    });
});

// Vendor Routes
Route::namespace('App\Http\Controllers\Vendor')->group(function () {

    // Vendor Dashboard
    Route::group(['middleware' => ['vendor']], function () {
        Route::get('vendor/dashboard', 'VendorController@dashboard')->name('vendor.dashboard');
        Route::match(['get', 'post'], 'vendor/account', 'VendorController@updateVendorDetails')->name('vendor.account');
        Route::match(['get', 'post'], 'vendor/store', 'VendorController@updateVendorStoreDetails')->name('vendor.store');
        Route::match(['get', 'post'], 'vendor/security', 'VendorController@updateVendorPassword')->name('vendor.security');
        Route::match(['get', 'post'], 'vendor/bank', 'VendorController@updateVendorBankDetails')->name('vendor.bank');
        Route::delete('vendor/delete/{id}', 'VendorController@deleteVendorAccount')->name('vendor.delete');
    });
});
