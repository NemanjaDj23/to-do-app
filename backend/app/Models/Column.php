<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    protected $fillable = ['title'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
