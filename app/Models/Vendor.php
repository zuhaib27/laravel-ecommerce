<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;
    protected $guarded = [];
    //public $table = 'name_exact_of_the_table';

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
