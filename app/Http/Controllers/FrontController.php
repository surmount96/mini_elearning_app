<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subject;
use Exception;

class FrontController extends Controller
{
    public function welcome()
    {
        $category = Category::latest()->get();
        return view('welcome',compact('category'));
    }

    public function explore(Request $request)
    {
        try{
            $message = '';
            $category = Category::latest()->get();
            $c = Category::where('slug','like','%'.$request->query('class').'%')->first();
            $subject = Subject::where('category_id',$c->id)->latest()->get();
            return view('base.explore',compact('category','subject','message'));
        } catch (Exception $e){
            $category = [];
            $subject = [];
            return view('base.explore',compact('category','subject'))->with(['message' => $e->getMessage()]);
        }
    }
}
