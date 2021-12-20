<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/test',function() {
//     return view('home.index');
// });

Route::get('/','FrontController@welcome');

Route::get('/explore', 'FrontController@explore');

Route::get('/get-started', function () {
    return view('base.register');
});

// Route::get('/products',function(){
//     return response()->json(['message' => true],200);
// });


// Tutor Authentication
Route::get('/tutor/login',function() {
    return view('base.tutor.login');
});

Route::get('/tutor/register',function() {
    return view('base.tutor.register');
});

//Students Authentication

Route::get('/login',function() {
    return view('base.students.login');
});


// Route::post('/register','App\Http\Controllers\API\Auth\AuthController@register');

Route::get('/debug-sentry', function () {
    throw new Exception('My first Sentry error!');
});

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'student'], function(){
    Route::get('/{any}',function() {
        return view('home.index');
    });
});


Route::group(['prefix' => 'tutor'], function(){
    Route::get('/{any}',function() {
        return view('home.tutor');
    });
});

Route::group(['prefix' => 'admin'], function(){
    Route::get('/{any}',function() {
        return view('home.admin');
    });
});
