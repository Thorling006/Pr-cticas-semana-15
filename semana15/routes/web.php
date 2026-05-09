<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TemperatureController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/temperature', [TemperatureController::class, 'index']);
