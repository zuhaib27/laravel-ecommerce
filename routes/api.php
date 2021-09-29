<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VendorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/products', [ProductController::class, 'index']);

Route::post('/products/add', [ProductController::class, 'addProduct']);

Route::post('/purchase', [UserController::class, 'purchase']);

Route::post('/vendor/register', [VendorController::class, 'storeContactForm']);

Route::delete("/products/delete/{id}",[ProductController::class, 'destoryProducts']);

Route::post("/products/update/{id}",[ProductController::class, 'modifyProducts']);