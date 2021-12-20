<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;

class UserController extends Controller
{
    public function register(Request $request)
    {
        return 3;
        try {
            User::create([

                ]);
                return response()->json(['message' => 'successful'],201);
        }catch (Exception $e)
        {
            throw new Exception('This message does not exist');
        }
    }
}
