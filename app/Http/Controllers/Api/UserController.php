<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function purchase(Request $request)
    {
        // make a purchase
        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)), //auto gen pwd
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'province' => $request->input('province'),
                'postal_code' => $request->input('postal_code')
            ]
        );

        try {
            $user->createOrGetStripeCustomer(); //save customer information on stripe db

            $payment = $user->charge(
                $request->input('amount'),
                $request->input('payment_method_id')
            );

            $payment = $payment->asStripePaymentIntent();

            $order = $user->orders()
                ->create([
                    'transaction_id' => $payment->charges->data[0]->id,
                    'total' => $payment->charges->data[0]->amount
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], ['quantity' => $item['quantity']]);
            }

            $order->load('products');
            return $order;

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
