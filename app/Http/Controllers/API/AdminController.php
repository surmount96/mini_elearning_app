<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Guardian;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\Tutor;
use App\Models\User;
use Exception;

class AdminController extends Controller
{
    public function users()
    {
       try{
            $tutor = Tutor::count();
            $student = Student::count();
            $guardian = Guardian::count();
            $class = Category::count();
            $data = [
                'student' => $student,
                'guardian' => $guardian,
                'class' => $class,
                'tutor' => $tutor,
            ];
            return response()->json([
                'data' => $data
            ],200);
       } catch (Exception $e){
            return response()->json([
                'errors' => [
                    'message' => $e->getMessage()
                ]
            ],500);
       }
    }

    public function student()
    {
        try {
            $learner = Student::with('category')->get();
            return response()->json([
                'learner' => $learner
            ],201);
        } catch (Exception $e){
            return response()->json([
                'errors' => [
                    'message' => $e->getMessage()
                ]
            ],500);
       }
    }

    public function tutor()
    {
        try {
            $tutor = User::where('role','tutor')->with(['tutor'=> function($query){
                $query->with(['bank','referee','experience','education','certificate'])->get();
            }])->get();
            return response()->json([
                'tutor' => $tutor
            ],201);
        } catch (Exception $e){
            return response()->json([
                'errors' => [
                    'message' => $e->getMessage()
                ]
            ],500);
       }
    }
}
