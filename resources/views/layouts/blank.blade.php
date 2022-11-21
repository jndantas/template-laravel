<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

</head>

<body>
<div id="app">
    <section class="section">
        <div class="container mt-5">
            @yield('content')
        </div>
    </section>
</div>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/stisla/master.js') }}"></script>
<script src="{{ asset('js/stisla/app.js') }}"></script>
<script src="{{ asset('js/stisla/scripts.js') }}"></script>



</body>
</html>
