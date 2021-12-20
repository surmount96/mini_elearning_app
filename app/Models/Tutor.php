<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Tutor extends Model
{
    use HasFactory;
    use UsesUuid;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function bank()
    {
        return $this->hasOne('App\Models\Bank');
    }

    public function certificate()
    {
        return $this->hasMany('App\Models\Certificate');
    }

    public function education()
    {
        return $this->hasMany('App\Models\Education');
    }

    public function experience()
    {
        return $this->hasMany('App\Models\Experience');
    }

    public function referee()
    {
        return $this->hasOne('App\Models\Referee');
    }

    public function verification()
    {
        return $this->hasOne('App\Models\Verification');
    }
}
