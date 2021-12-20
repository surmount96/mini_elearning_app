<?php

namespace App\Models;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory, UsesUuid;

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
