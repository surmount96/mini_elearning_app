<?php

namespace App\Models;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guardian extends Model
{
    use HasFactory, UsesUuid;
    
    protected $guarded = [];

    public function user()
    {
        return $this->hasOne('App\Models\User');
    }
}
