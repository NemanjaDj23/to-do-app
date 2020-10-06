<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ColumnController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('tasks', [TaskController::class, 'index']);
Route::get('task/{id}', [TaskController::class, 'show']);
Route::post('task', [TaskController::class, 'store']);
Route::put('task/{id}', [TaskController::class, 'update']);
Route::delete('task/{id}', [TaskController::class, 'destroy']);

Route::get('lists', [ColumnController::class, 'index']);
Route::get('list/{id}', [ColumnController::class, 'show']);
Route::post('list', [ColumnController::class, 'store']);
Route::put('list/{id}', [ColumnController::class, 'update']);
Route::delete('list/{id}', [ColumnController::class, 'destroy']);