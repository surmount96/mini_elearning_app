<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Student;
use Exception;
use Illuminate\Support\Facades\Storage;

class SubjectController extends Controller
{
    public function store(Request $request)
    {
        try {
            $input = $request->all();
            $file = $request->file('cover_image');
            if($request->hasFile('cover_image')){
                $disk = 'public';
                $ext = $file->getClientOriginalExtension();
                $path = 'class-'.time().'.'.$ext;
                Storage::disk($disk)->putFileAs('class',$file,$path);
                // return $path;
                $input['cover_image'] = $path;
            }

            Subject::create([
                'title' => $input['title'],
                'description' => $input['description'],
                'category_id' => $input['category_id'],
                'cover_image' => $input['cover_image']
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function storeLearner(Request $request)
    {
        Student::create([
            'name' => $request['name'],
            'goal' => $request['goal'],
            'description' => $request['description'],
            'class_type' => 'online',
            'category_id' => $request['category_id'],
            'user_id' => $request['user_id']
        ]);

        return response()->json(['message' => 'registration completed'],200);
    }
}
