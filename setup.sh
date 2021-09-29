#!/bin/bash

composer install
npm install
php artisan migrate:refresh --seed
npm run dev

cat './resources/css/csstemplate.css' >> './public/css/app.css' 

php artisan serve
