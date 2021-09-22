<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Product::factory()->count(20)->create();    //generate 20 products
        Category::factory()->count(5)->create();    //generate 5 categories

        $categories = Category::all();
        Product::all()->each(function ($product) use ($categories) 
        {
            $product->categories()->attach( //attach category to each of the products
                $categories->random(2)->pluck('id')->toArray() //pick out 2 categories, and grab there 'id'
            );
        });
    }
}
