<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Product;

class BasicTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_path_product()
    {
        $response = $this->get('/products');

        $response->assertStatus(200);
    }
    public function test_path_checkout()
    {
        $response = $this->get('/checkout');

        $response->assertStatus(200);
    }
    public function test_path_login()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }
    public function test_path_register()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }
    
}
