@extends('layouts.frontend')

@section('extra-styles')
<style>
    .header{
         background-image: url('{{ asset('img/lecture.jpg') }}');
         height:70vh;
         background-size:cover;
    }
</style>
@endsection

@section('content')
    <register />
@endsection