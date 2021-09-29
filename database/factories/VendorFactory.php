<?php

namespace Database\Factories;

use App\Models\Vendor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

class VendorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Vendor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->jobTitle();
        $nameArr = explode(' ', $name);

        $name = trim($nameArr[0]);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->realText(320),
            'email' => $this->faker->unique()->safeEmail(),
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'province' => $this->faker->state(), //need to fix for CANADA province()
            'postal_code' => $this->faker-> postcode()  //need to fix for CANADA postalcode()
        ];
    }
}
