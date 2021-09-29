<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function storeContactForm(Request $request)
    {
        $datetime = $this->getTimestamp();
      
        $data =  array_merge($request->all(), ['slug' => Str::slug($request->name), 'created_at' => $datetime, 'updated_at' => $datetime]);

        
        Vendor::insert($data);
        
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'description' => 'required',
            'address' => 'required',
            'city' => 'required',
            'province' => 'required',
            'postalcode' => 'required'
        ]);

        $input = $request->all();

        Vendor::create($input);

        //  Send mail to admin
        \Mail::send('contactMail', array(
            'name' => $input['name'],
            'email' => $input['email'],
            'description' => $input['description'],
            'address' => $input['address'],
            'city' => $input['city'],
            'province' => $input['province'],
            'postalcode' => $input['postalcode']

        ), function($message) use ($request){
            $message->from($request->email);
            $message->to('zuhaib.k.2@hotmail.com', 'Admin')->subject($request->get('subject'));
        });

        return redirect()->back()->with(['success' => 'Contact Form Submit Successfully']);
    }
    private function getTimestamp()
    {
        return date_create()->format('Y-m-d H:i:s');
    }
}
