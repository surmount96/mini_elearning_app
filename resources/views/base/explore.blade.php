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
    <header class="">
        @include('inc.nav')
    </header>

    <section class="mt-10 lg:px-16 md:px-12">
        @if($message)
            <el-alert
            title="{{ $message }}"
            type="error">
            </el-alert>
        @endif
        <div class="flex flex-wrap">
            <div class="lg:w-3/12 md:w-3/12 sm:w-3/12 w-full mb-4">
                <div class="bg-white mx-6 rounded " style="minHeight:70vh;">
                    <div class="h-8 bg-gray-200 text-gray-dark py-2">
                        <p class="text-small pl-8">SEARCH BY CATEGORY</p>
                    </div>
                    @if(count($category) > 0)
                        @foreach($category as $c)
                            <a href="/explore?class={{ $c->slug }}" class="{{ $c->slug == app('request')->input('class')  ? 'text-warning' : ''}}">
                                <div class="my-4 pl-8 border-b border-gray pb-3">
                                    <p class="text-body-2 ">{{ $c->name }}</p>
                                </div>
                            </a>
                        @endforeach
                    @endif
                </div>
            </div>
            <div class="lg:w-9/12 md:w-9/12 sm:w-1/2 w-full mb-4">
                <div class="bg-white rounded px-3 pt-3">
                    <p class="text-sky-blue text-medium font-semibold pb-3">Active Subjects</p>
                    <hr class="border-b flex border-sky-blue w-16">
                </div>
                <div class="flex flex-wrap mt-10">
                    @if(count($subject) > 0)
                        @foreach($subject as $key => $sub)
                            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-4">
                                <a href="/get-started">
                                    <div class="bg-white mx-2 shadow-sm border border-gray p-3 cursor-pointer">
                                        <div class="">
                                            <img src="{{ asset('img/learn-'.$key.'.jpg') }}" alt="mathematics" class="object-cover w-64">
                                        </div>
                                        <div class="text-gray-darker text-body-2 pt-3">
                                            <h4 class="text-black font-bold hover:text-orange">{{ $sub->title }}</h4>
                                            <p class="text-medium">{{ $sub->description }}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        @endforeach
                    @endif
                    

                </div>
                
            </div>
        </div>
    </section>
    <section class="bg-green-deep flex flex-col items-center justify-center" style="height: 45vh">
        <h3 class="font-bold text-h3 text-white">Experienced in teaching?</h3>
        <div class="mt-5">
            <button class="bg-green py-3 px-20 w-full text-white rounded-md">Get a home tutor</button>
        </div>
    </section>
    @include('inc.footer')
@endsection
