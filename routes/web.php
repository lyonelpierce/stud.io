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

// Admin and Vendor Routes
Route::namespace('App\Http\Controllers\Admin')->group(function () {

    // Admin Dashboard
    Route::group(['middleware' => ['admin']], function () {
        Route::get('admin/dashboard', 'AdminController@dashboard')->name('admin.dashboard');
        Route::match(['get', 'post'], 'admin/account', 'AdminController@updateAdminDetails')->name('admin.account');
        Route::match(['get', 'post'], 'admin/security', 'AdminController@updateAdminPassword')->name('admin.security');

        Route::match(['get', 'post'], 'admin/users/vendors', 'AdminController@userList')->name('admin.users.vendors');
        Route::post('admin/users/userStatus', 'AdminController@userStatus')->name('admin.users.vendors.status');
        Route::delete('admin/users/userDelete/{userId}', 'AdminController@userDelete')->name('admin.users.vendors.delete');
        
        Route::match(['get', 'post'], 'admin/sections', 'AdminController@sectionList')->name('admin.sections');
        Route::post('admin/sections/sectionStatus', 'AdminController@sectionStatus')->name('admin.sections.status');
        Route::delete('admin/sections/sectionDelete/{sectionId}', 'AdminController@sectionDelete')->name('admin.sections.delete');

        Route::match(['get', 'post'], 'admin/categories', 'AdminController@categoryList')->name('admin.categories');
        Route::post('admin/categories/categoryStatus', 'AdminController@categoryStatus')->name('admin.categories.status');
        Route::delete('admin/categories/categoryDelete/{categoryId}', 'AdminController@categoryDelete')->name('admin.categories.delete');

        Route::match(['get', 'post'], 'admin/products', 'AdminController@productList')->name('admin.products');
        Route::post('admin/products/productStatus', 'AdminController@productStatus')->name('admin.products.status');
        Route::delete('admin/products/productDelete/{productId}', 'AdminController@productDelete')->name('admin.products.delete');
    });

    // Vendor Dashboard
    Route::group(['middleware' => ['vendor']], function () {
        Route::get('vendor/dashboard', 'VendorController@dashboard')->name('vendor.dashboard');
        Route::match(['get', 'post'], 'vendor/account', 'VendorController@updateVendorDetails')->name('vendor.account');
        Route::match(['get', 'post'], 'vendor/store', 'VendorController@updateVendorStoreDetails')->name('vendor.store');
        Route::match(['get', 'post'], 'vendor/security', 'VendorController@updateVendorPassword')->name('vendor.security');
        Route::match(['get', 'post'], 'vendor/bank', 'VendorController@updateVendorBankDetails')->name('vendor.bank');
        Route::delete('vendor/delete/{id}', 'VendorController@deleteVendorAccount')->name('vendor.delete');

        Route::get('vendor/calendar', 'VendorController@calendar')->name('vendor.calendar');
    });
});