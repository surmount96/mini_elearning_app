@extends('layouts.tutor')

@section('extra-styles')
<meta name="author" content="" />
<meta name="keywords" content="Tutor Login" />
<meta name="description" content="" />

<style>
    .linear{
        background-image: linear-gradient(to right, rgb(251,184,3),rgb(2,0,54))
    }
</style>
@endsection

@section('content')
    <div class="flex flex-col justify-center linear" style="height: 100vh">
        <div class="w-1/3 mx-auto bg-white rounded-md shadow py-6">
            <div class=" px-5 py-2">
                <div class="">
                    <img src="{{ asset('img/logo/logo.png') }}" alt="" class="object-cover w-16 mx-auto">
                </div>
                <h3>Tutor Login</h3>
            </div>
            <div class="px-5 pt-3 pb-6">
                <div class="mb-5">
                    <label for="" class="text-medium mb-3">Email Address</label>
                    <input type="text" placeholder="Email Address" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                </div>
                <div class="mb-5">
                    <label for="" class="text-medium mb-3">Password</label>
                    <input type="password" placeholder="*******" class="focus:outline-none py-2 px-4 border border-gray text-medium w-full">
                </div>
                <div>
                    <button class="bg-blue py-4 px-8 text-white text-medium rounded-md w-full">Login</button>
                </div>
                <div class="text-medium my-3 text-center">
                    <p class="mb-1">
                        Don't have an account?
                        <a href="/tutor/register" class="text-blue">Sign up</a>
                    </p> 
                    <p>
                        Forgot your Password?
                        <a href="/tutor/register" class="text-blue"> Click here</a>
                    </p> 

                </div>
            </div>
        </div>
    </div>
@endsection