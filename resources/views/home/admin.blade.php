<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> Hesec Admin Dashboard</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="shortcut icon" href="{{ asset('img/logo/logo.png') }}" type="image/x-icon">
        
        <!-- Styles -->
       <link rel="stylesheet" href="{{ asset('css/app.css') }}">
       
       @yield('extra-styles')
    </head>
    <body class="antialiased relative bg-gray">
        <div class="" id="app">
            <admin-layout />
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>