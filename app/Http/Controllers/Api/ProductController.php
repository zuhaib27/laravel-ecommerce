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
        $data =  array_merge($request->all(), ['slug' => Str::slug($request->name), 'created_at' => $datetime, 'updated_at' => $datetime]);

        Product::insert($data);
        return response()->json(['name' => $request->name]);

    }
    public function deleteProducts(Product $id)
    {
        $this->console_log($id, true);

        $data = Product::find($id);
        
        if ($data->delete()) {
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
    public function modifyProduct(Request $request)
    {
        
        return response()->json(['name' => $request->name]);
    }
    private function getTimestamp()
    {
        return date_create()->format('Y-m-d H:i:s');
    }

    private function console_log($data, $add_script_tags = false) {
        $command = 'console.log('. json_encode($data, JSON_HEX_TAG).');';
        if ($add_script_tags) {
            $command = '<script>'. $command . '</script>';
        }
        echo $command;
    }   
}
