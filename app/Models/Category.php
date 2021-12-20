<?php

namespace App\Models;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, UsesUuid;

    protected $guarded = [];

    public function subjects()
    {
        return $this->hasMany('App\Models\Subject');
    }

    // public function student()
    // {
    //     return $this->belongsTo('App\Models\Student');
    // }
}
