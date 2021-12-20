@extends('layouts.frontend')

@section('extra-styles')
    <style>
        .header{
            background-image:linear-gradient(to right, rgba(0,0,0,.2),rgba(0,0,0,.2)), url('{{ asset('img/kid.jpg') }}');
            height:70vh;
            background-size:cover;
        }
        .bg-homeTutor{
            height: 80vh;
            background-image: url('{{ asset('img/kid2.jpg') }}');
            background-position-x: left;
            background-size:cover;
        }
    </style>
@endsection

@section('content')
    <header class="header">
        @include('inc.nav')
        <div class="lg:px-16 md:px-12 py-24 font-bold text-white text-center">
            <h1 class="lg:text-h1 md:text-h2 text-h3">
                Locate your ideal tutor
            </h1>
            <p class="text-body-2">
                Book private sessions with professional tutors in your vicinity
            </p>
            <form action="/explore" method="GET">
                <div class="my-6 flex items-center content-center lg:w-2/3 md:w-2/3 w-full mx-auto">
                    <input type="search" name="class" class="py-3 text-gray-grayer text-medium w-full px-3 focus:outline-none" placeholder="What do you want to learn? search by classes">
                    <button class="bg-blue text-white py-3 px-4 rounded">Search</button>
                </div>
            </form>
        </div>
    </header>

    <section class="lg:px-16 md:px-12">
        <div class="text-center text-gray-dark my-12">
            <h3 class="text-h3">
                Welcome, lets show you around
            </h3>
            <p class="text-body-2 lg:w-128 text-center mt-3 mx-auto">
                Heseg Academy is here to help you get competent tutors for your kids, making excellence inevitable.
            </p>
        </div>
        <div class="flex flex-wrap my-16">
            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3 text-center">
                <div class="mx-10">
                    <div class=" mb-3">
                        <img src="{{ asset('img/icon/lawyer.svg') }}" alt="" class="w-20 mx-auto">
                    </div>
                    <div class="mt-4">
                        <h4 class="text-h4 mb-4">
                            Trusted Educators
                        </h4>
                        <p class="text-body-2">
                            Each tutor is skilled, neighborly, screened, and altogether checked for highest character.
                        </p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3 text-center">
                <div class="mx-10">
                    <div class=" mb-4">
                        <img src="{{ asset('img/icon/calendar.svg') }}" alt="" class="w-20 mx-auto">
                    </div>
                    <div class="mt-3">
                        <h4 class="text-h4 mb-4">
                            Schedule your classes
                        </h4>
                        <p class="text-body-2">
                            Plan your private lessons according to your own schedule.
                        </p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full mb-3 text-center">
                <div class="mx-10">
                    <div class=" mb-3">
                        <img src="{{ asset('img/icon/safe.svg') }}" alt="" class="w-20 mx-auto">
                    </div>
                    <div class="mt-4">
                        <h4 class="text-h4 mb-4">
                            Safe and Secure
                        </h4>
                        <p class="text-body-2">
                            Trusted by 100s of happy parents,nation wide, professionals and students 90% success rate.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="mt-10">
        <div class="flex flex-wrap">
            <div class="lg:w-1/3 md:w-1/3 w-full mb-4 p-12 bg-gray-dark text-white">
                <h3 class="text-h4 font-bold mb-5">
                    Get a professional home tutor for your kids?
                </h3>
                <hr class="border-t-2 border-white w-10">
                <div class="mt-12">
                    <h5 class="text-large mt-4 mb-3 font-bold">
                        Put your children ahead right on time
                    </h5>
                    <p class="text-gray-100 text-medium font-bold">
                        Improve grades in class, find support with schoolwork, boost confidence in weak subjects, be glad for your children's results.
                    </p>
                </div>
                <div class="mt-12">
                    <h5 class="text-large mt-4 mb-3 font-bold">
                        Find tutors you can trust
                    </h5>
                    <p class="text-gray-100 text-medium font-bold">
                        Get completely verified private tutors who're explicitly knowledgeable about educating, coaching and inspiring children like yours.
                    </p>
                </div>
                <div class="mt-10">
                    <a href="/get-started" class="bg-green block text-center py-4 w-full text-white rounded-md">Get a home tutor</a>
                </div>
            </div>
            <div class="lg:w-2/3 md:w-2/3 w-full mb-4">
                <div class="bg-homeTutor">

                </div>
            </div>
        </div>
    </section>
    <section class="mt-10 lg:px-16 md:px-12">
        <div class="text-center text-gray-darker">
            <h3 class="text-h3">Learn from Experts</h3>
            <p class="text-body-2">No need to struggle. Get an experienced tutor.</p>
        </div>
        @if(count($category) > 0)
        <div class="flex flex-wrap mt-10">
            @foreach($category as $key => $c)
            <div class="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mb-4">
                <a href="/get-started">
                    <div class="bg-white mx-2 shadow-sm border border-gray p-3 cursor-pointer">
                        <div class="">
                            <img src="{{ asset('storage/class/'.$c->cover_image) }}" alt="{{ $c->name }}" class="object-cover lg:w-64 md:w-64 w-full h-40">
                        </div>
                        <div class="text-gray-darker text-body-2 pt-3">
                            <h4 class="text-black font-bold hover:text-orange">{{ $c->name }}</h4>
                            {{-- <p>Algebra Calculus Geometry</p> --}}
                        </div>
                    </div>
                </a>
            </div>
            @endforeach
        </div>
        @endif

    </section>
    <section class="bg-green-deep flex flex-col items-center justify-center" style="height: 45vh">
        <h3 class="font-bold text-h3 text-white">Experienced in teaching?</h3>
        <div class="mt-5">
            <a href="/get-started" class="bg-green py-3 px-20 w-full text-white rounded-md">Get a home tutor</a>
        </div>
    </section>
    <section class="my-4">
        <h3 class="text-h3 text-center">Partners</h3>
        <div class="flex flex-wrap lg:px-16 md:px-8 px-3">
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full mb-4">
                <img src="{{ asset('img/partner/fast_company.webp') }}" alt="">
            </div>
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full mb-4">
                <img src="{{ asset('img/partner/human.webp') }}" alt="">
            </div>
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full mb-4">
                <img src="{{ asset('img/partner/forbes.webp') }}" alt="">
            </div>
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full mb-4">
                <img src="{{ asset('img/partner/mit.webp') }}" alt="">
            </div>
            <div class="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full mb-4">
                <img src="{{ asset('img/partner/tribune.webp') }}" alt="">
            </div>
        </div>
    </section>
    @include('inc.footer')
@endsection
