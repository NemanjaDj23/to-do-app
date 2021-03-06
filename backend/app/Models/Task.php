<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['column_id', 'title', 'description', 'order'];

    public function column()
    {
        return $this->belongsTo(Column::class);
    }
}
