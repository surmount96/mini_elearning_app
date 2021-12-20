<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\LessonSchedule;
use App\Models\User;
use App\Models\Student;
use App\Models\Guardian;
use App\Models\Pricing;
use App\Models\Tutor;
use Exception;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class ResourceController extends Controller
{
    public function index()
    {
        try {
            $result = Category::latest()->with('subjects')->get();
            return response()->json(['data' => $result],201);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function getStudent(Request $request)
    {
        $id = $request->query('id');
        try {
            $result = Student::where('user_id',$id)
            ->with(['category'])
            ->get();
            return response()->json(['student' => $result],201);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }


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

            Category::create([
                'name' => $input['name'],
                'slug' => Str::slug($input['name'],'-'),
                'cover_image' => $input['cover_image']
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function deleteClass($id){
        $classes = Category::find($id);
        $classes->delete();

        return 'success';
    }

    public function deleteTutor($id){
        // return $id;
        $tutor = User::find($id);
        $tutor->delete();

        return 'success';
    }

    public function deleteLearner($id){
        $learner = Student::find($id);
        $learner->delete();

        return 'success';
    }

    public function step(Request $request)
    {
        try {
            $input = $request->all();
            $user = User::create([
                'name' => $input['user']['firstname'].' '.$input['user']['lastname'],
                'email' => $input['user']['email'],
                'role' => 'parent',
                'phone_number' => $input['user']['phone_number'],
                'password' => Hash::make(strtolower($input['user']['lastname']))
            ]);
            
            Guardian::create([
                'user_id' => $user->id,
                'state_of_residence' => $input['user']['state'],
                'location' => $input['user']['city'],
                'session_type' => $input['class_type']
            ]);
            LessonSchedule::create([
                'user_id' => $user->id,
                'days' => implode(',',$input['lesson_schedule']['days']),
                'start_date' => $input['lesson_schedule']['start_date'],
                'duration' => $input['lesson_schedule']['duration'],
                'hour_per_day' => $input['lesson_schedule']['hour_per_day'],
                'start_time' => $input['lesson_schedule']['start_time'],
            ]);
            foreach($input['students'] as $student){
                // return $student;
                Student::create([
                    'name' => $student['name'],
                    'goal' => $student['goal'],
                    'description' => $student['description'],
                    'class_type' => $input['class_type'],
                    'category_id' => $student['category_id'],
                    'user_id' => $user->id
                ]);
            }
            $amount = env('APP_FEE',1540) * (int) $input['lesson_schedule']['hour_per_day'] * ( (int) $input['lesson_schedule']['duration'] * count($input['lesson_schedule']['days']));

            Pricing::create([
                'user_id' => $user->id,
                'amount' => $amount
            ]);

            return response()->json(['message' => 'registration completed'],200);
        } catch(Exception $e) {
            return response()->json([
                'errors' => [
                    'message' => $e->getMessage()
                ]
                ],500);
        }
    }
}
