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
        //return all prodcuts
        return Product::with('categories:id,name')
            ->get();
    }
    public function addProduct(Request $request)
    {
        $datetime = $this->getTimestamp();
        $request->price = ($request->price) * 100; //due to /100 in css cause of how i decided to factory build products
        $data =  array_merge($request->all(), ['slug' => Str::slug($request->name), 'created_at' => $datetime, 'updated_at' => $datetime]);

        Product::insert($data);
        return response()->json(['name' => $request->name]);

    }
    public function destoryProducts(Product $id)
    {
        //$this->console_log($id, true);
        $data = Product::find($id);
    
        if ($data->each->delete()) {
            return response()->json([
                'message' => 'product deleted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function modifyProducts(Product $id, Request $request)
    {
        $data = Product::find($id);
        //$data->update($request->all());
        //dd($data);
        if ($data->each->update($request->all())) 
        {
            return response()->json([
                'message' => 'product modified successfully!',
                'status_code' => 200
            ], 200); 
        } else 
        {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }
    private function getTimestamp()
    {
        return date_create()->format('Y-m-d H:i:s');
    }

}
