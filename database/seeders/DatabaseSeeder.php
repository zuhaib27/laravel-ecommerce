<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Vendor;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);             //generate admin user
        Product::factory()->count(20)->create();    //generate 20 products
        Category::factory()->count(5)->create();    //generate 5 categories
        Vendor::factory()->count(5)->create();    //generate 5 vendors


        $categories = Category::all();
        $vendors = Vendor::all();
       
        Product::all()->each(function ($product) use ($categories, $vendors) 
        {
            $product->categories()->attach( //attach category to each of the products
                $categories->random(2)->pluck('id')->toArray() //pick out 2 categories, and grab there 'id'
            );
            $product->vendors()->attach( //attach vendor to each of the products
                $vendors->random(1)->pluck('id')->toArray() //pick out 1 Vendor, and grab there 'id'
            );
        });



    }
}
