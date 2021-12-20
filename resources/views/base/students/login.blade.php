@extends('layouts.tutor')

@section('extra-styles')
<meta name="author" content="" />
<meta name="keywords" content="Hesec Login" />
<meta name="description" content="" />

<style>
    .linear{
        background-image: linear-gradient(to right, rgb(251,184,3),rgb(2,0,54))
    }
</style>
@endsection

@section('content')
    <login-layout />
@endsection