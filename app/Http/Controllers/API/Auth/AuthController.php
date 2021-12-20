<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'role' => 'tutor'
            ]);
            $token = $user->createToken('auth-token')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $user
            ],201);
        }catch (Exception $e)
        {
            // throw new Exception('This message does not exist');
            return response([
                'status' => $e,
                'message' => $e->getMessage()
            ]);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

            $credentials = request(['email', 'password']);
            
            if(!Auth::attempt($credentials)){
                return response()->json(['message' => 'Please check your credentials'], 401);
            }

            $user = User::where('email', $request->email)->first();
            
            $tokenResult = $user->createToken('auth-token')->plainTextToken;
            return response()->json([
              'status_code' => 200,
              'token' => $tokenResult,
              'user' => $user,
            ]);
    }
}
