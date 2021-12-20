<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\ResourceController;
use App\Http\Controllers\API\SubjectController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\TutorController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


    Route::group(['prefix' => 'v1'], function() {
        
        Route::post('register',[AuthController::class,'register']);
        Route::post('login',[AuthController::class,'login']);

        Route::get('classes',[ResourceController::class,'index']);
        Route::post('registration',[ResourceController::class,'step']);

        Route::group(['prefix' => 'tutor'],function() {
            Route::post('tutor',[TutorController::class,'store']);
            Route::post('experience',[TutorController::class,'storeExperience']);
            Route::post('certificate',[TutorController::class,'storeCertificate']);
            Route::post('bank',[TutorController::class,'storeBank']);
            Route::post('referee',[TutorController::class,'storeReferee']);
            Route::post('education',[TutorController::class,'storeEducation']);
            Route::post('verification',[TutorController::class,'storeVerification']);
        });
        
        Route::group(['middleware' => 'auth:sanctum'], function() {
            Route::post('classes',[ResourceController::class,'store']);
            Route::post('subject',[SubjectController::class,'store']);
            Route::post('learner',[SubjectController::class,'storeLearner']);
            Route::get('student',[ResourceController::class,'getStudent']);

            Route::group(['prefix' => 'admin'],function() {
                Route::get('all-users',[AdminController::class,'users']);
                Route::get('tutor',[AdminController::class,'tutor']);
                Route::get('learner',[AdminController::class,'student']);
                Route::delete('class/{id}',[ResourceController::class,'deleteClass']);
                Route::delete('tutor/{id}',[ResourceController::class,'deleteTutor']);
                Route::delete('learner/{id}',[ResourceController::class,'deleteLearner']);
            });

        });
    });


