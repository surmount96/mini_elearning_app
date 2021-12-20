<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Heseg Academy - Online classes and home tutor</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="shortcut icon" href="{{ asset('img/logo/logo.png') }}" type="image/x-icon">
        <!-- Styles -->
       <link rel="stylesheet" href="{{ asset('css/app.css') }}">
       
       @yield('extra-styles')
    </head>
    <body class="antialiased relative bg-gray">

        <div class="" id="app">
            <div class="fixed right-0 mt-64 bg-blue text-white px-3 py-2 rounded-tl-md rounded-tr-md rotate">
                <p class="flex items-center">
                    <i class="ri-feedback-fill mr-2"></i>
                    <span class="text-medium font-bold">Feedback</span>
                </p>
            </div>
            @yield('content')
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>