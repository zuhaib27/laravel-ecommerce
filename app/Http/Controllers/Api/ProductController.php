<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Response;
use Illuminate\Support\Str;
use DateTime;

class ProductController extends Controller
{
    public function index()
    {
        //reurn all prodcuts
        return Product::with('categories:id,name')
            ->get();
    }
    public function addProduct(Request $request)
    {
        $datetime = date_create()->format('Y-m-d H:i:s');
        $data =  array_merge($request->all(), ['slug' => Str::slug($request->name), 'created_at' => $datetime, 'updated_at' => $datetime]);

        Product::insert($data);
        return response()->json(['name' => $request->name]);

    }
    public function deleteProduct(Request $request)
    {

        return response()->json(['name' => $request->name]);
    }
}
