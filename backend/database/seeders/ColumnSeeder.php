<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ColumnSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('columns')->delete();
        
        \DB::table('columns')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => "To Do",
                'created_at' => '2020-10-01 00:00:00',
                'updated_at' => '2020-10-01 00:00:00',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => "In Progress",
                'created_at' => '2020-10-01 00:00:00',
                'updated_at' => '2020-10-01 00:00:00',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => "Done",
                'created_at' => '2020-10-01 00:00:00',
                'updated_at' => '2020-10-01 00:00:00',
            ),
        ));
    }
}
