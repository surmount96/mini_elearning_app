<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tutor;
use App\Models\Certificate;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Referee;
use App\Models\Bank;
use App\Models\User;
use App\Models\Verification;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class TutorController extends Controller
{
    public function store(Request $request)
    {
        try {
            $input = $request->all();
            $request->validate([
                'name' => 'required',
                'email' => 'required',
                'phone_number' => 'required | digits:11',
                'password' => 'required | confirmed',
                'gender' => 'required',
                'address' => 'required',
                'state' => 'required',
                'date_of_birth' => 'required',
                'lga' => 'required',
            ]);
            $role = 'tutor';
            $user = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'role' => $role,
                'phone_number' => $input['phone_number'],
                'password' => Hash::make($input['password'])
            ]);
            
            $tutor = Tutor::create([
                'user_id' => $user->id,
                'gender' => $input['gender'],
                'address' => $input['address'],
                'state' => $input['state'],
                'lga' => $input['lga'],
                'date_of_birth' => Carbon::parse($input['date_of_birth'])->format('Y/m/d'),
            ]);

            return response()->json(['tutor' => $tutor],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeExperience(Request $request)
    {
        try {
            $input = $request->all();
            $request->validate([
                'organization_name' => 'required',
                'position' => 'required',
                'enroll_date' => 'required',
                'enroll_end_date' => 'required ',
                'description' => 'required ',
            ]);
            Experience::create([
                'tutor_id' => $input['tutor_id'],
                'organization_name' => $input['organization_name'],
                'position' => $input['position'],
                'description' => $input['description'],
                'enroll_date' => Carbon::parse($input['enroll_date'])->format('Y/m/d'),
                'enroll_end_date' => Carbon::parse($input['enroll_end_date'])->format('Y/m/d'),
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeEducation(Request $request)
    {
        try {
            $input = $request->all();
            // return $input;
            $request->validate([
                'university' => 'required',
                'course' => 'required',
                'degree_type' => 'required',
                'cgpa' => 'required ',
                'honor' => 'required',
                'start_date' => 'required',
                'end_date' => 'required',
            ]);
            Education::create([
                'tutor_id' => $input['tutor_id'],
                'university' => $input['university'],
                'course' => $input['course'],
                'degree_type' => $input['degree_type'],
                'cgpa' => $input['cgpa'],
                'honor' => $input['honor'],
                'start_year' => Carbon::parse($input['start_date'])->format('Y/m/d'),
                'end_year' => Carbon::parse($input['end_date'])->format('Y/m/d'),
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeReferee(Request $request)
    {
        try {
            $input = $request->all();
            $request->validate([
                'referee_name' => 'required',
                'referee_relationship' => 'required',
                'referee_phone_number' => 'required',
                'referee_address' => 'required',
                'referee_email' => 'required',
                'referee_occupation' => 'required ',
            ]);
            Referee::create([
                'tutor_id' => $input['tutor_id'],
                'name' => $input['referee_name'],
                'email' => $input['referee_email'],
                'phone_number' => $input['referee_phone_number'],
                'relationship' => $input['referee_relationship'],
                'address' => $input['referee_address'],
                'occupation' => $input['referee_occupation'],
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeVerification(Request $request)
    {
        try {
            $input = $request->all();
            $file = $request->file('document');
            $request->validate([
                'identity_type' => 'required',
                'identity_number' => 'required',
                'document' => 'required',
            ]);

            if($request->hasFile('document')){
                $disk = 'public';
                $ext = $file->getClientOriginalExtension();
                $path = 'class-'.time().'.'.$ext;
                Storage::disk($disk)->putFileAs('verification',$file,$path);
                // return $path;
                $input['document'] = $path;
            }

            Verification::create([
                'tutor_id' => $input['tutor_id'],
                'identity_type' => $input['identity_type'],
                'identity_number' => $input['identity_number'],
                'document' => $input['document'],
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeBank(Request $request)
    {
        try {
            $input = $request->all();
            $request->validate([
                'bank_name' => 'required',
                'account_name' => 'required',
                'account_number' => 'required | digits:10',
            ]);
            Bank::create([
                'tutor_id' => $input['tutor_id'],
                'bank_name' => $input['bank_name'],
                'account_name' => $input['account_name'],
                'account_number' => $input['account_number'],
            ]);

            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }

    public function storeCertificate(Request $request)
    {
        try {
            $input = $request->all();
            $request->validate([
                'title' => 'required',
                'year' => 'required',
            ]);
            Certificate::create([
                'tutor_id' => $input['tutor_id'],
                'title' => $input['title'],
                'year' => Carbon::parse($input['year'])->format('Y/m/d'),
            ]);
            return response()->json(['message' => 'successful'],201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ],422);
        }
    }
}
