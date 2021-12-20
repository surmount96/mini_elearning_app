<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Experience extends Model
{
    use HasFactory, UsesUuid;

    protected $guarded = [];

    public function tutor()
    {
        return $this->belongsTo('App\Models\Tutor');
    }
}
