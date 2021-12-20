<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Verification extends Model
{
    use HasFactory, UsesUuid;

    protected $guarded = [];
}
