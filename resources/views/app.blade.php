<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>XYZ Shopping Cart</title>

        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body class="antialiased">
        <div class="container mx-auto">
            <div id="app">
                <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                    <div class="container">
                        <a class="navbar-brand" href="{{ url('/') }}">
                            {{ config('app.name', 'XYZ Store') }}
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <!-- Left Side Of Navbar -->
                            <ul class="navbar-nav mr-auto">

                            </ul>

                            <!-- Right Side Of Navbar -->
                            <ul class="navbar-nav ml-auto">
                                <!-- Authentication Links -->
                                @guest
                                    @if (Route::has('login'))
                                        <li class="nav-item">
                                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                        </li>
                                    @endif

                                    @if (Route::has('register'))
                                        <li class="nav-item">
                                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                        </li>
                                    @endif
                                @else
                                    @if (Auth::user()->is_admin) <!-- Access to admin controls -->
                                        <li class="nav-item">
                                        <router-link
                                            class="mr-5 hover:text-gray-900"
                                            :to="{name: 'products.add'}"
                                        >
                                            Add New Product!
                                        </router-link>
                                        </li>
                                        <li class="nav-item">
                                        <router-link
                                            class="mr-5 hover:text-gray-900"
                                            :to="{name: 'products.delete'}"
                                        >
                                            Delete Product
                                        </router-link>
                                        </li>
                                    @endif
                                    <li class="nav-item dropdown">
                                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                            {{ Auth::user()->name }}
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                            document.getElementById('logout-form').submit();">
                                                {{ __('Logout') }}
                                            </a>

                                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                                @csrf
                                            </form>
                                        </div>
                                    </li>
                                @endguest
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="wrapper">
                    <header class="text-gray-700 body-font">
                        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                                <rect x="8" y="14" width="32" height="30" rx="2" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 18V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11V18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <router-link
                                    class="ml-3 text-xl"
                                    :to="{name: 'products.index'}"
                                >
                                <span>XYZ</span>
                            </router-link>
                            </a>
                            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                                <router-link
                                    class="mr-5 hover:text-gray-900"
                                    :to="{name: 'products.index'}"
                                >
                                    Products
                                </router-link>
                            </nav>
                            <router-link
                                class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                                :to="{name: 'order.checkout'}"
                            >
                                Checkout<span class="inline-block ml-1" v-text="'(' + $store.state.cart.length + ' items)'"></span>
                            </router-link>
                        </div>
                    </header>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
        
    </body>
</html>
