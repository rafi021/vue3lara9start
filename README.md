<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About vue3lara9start

It is a Laravel 9 Vue3 based demo project showing the basics of Vue 3. Authentication, Authorization, Routing, form submittion and data binding. It will help begineers to understand "how to start with Laravel 9 & Vue 3". Build with love and passon and also its open source for web artisans.

1. Laravel 9
2. Vue 3
3. Tailwind CSS 3
4. laravel/breeze

## Getting Started Step by Step
1. In your root folder, clone the project file using git clone https://github.com/rafi021/vue3lara9start.git
2. Open terminal (bash/cmd). Then go to project folder using command

```sh
cd vue3lara9start
```

3. Then install required files and libraries using 

```sh
composer install
```

4. Then create a .env file and generate key for this project using command 

```sh
cp .env.example .env

php artisan key:generate
```

5. Then compile all CSS & JS files together using this command

```sh
npm install && npm run dev
```

or

```sh
yarn install && yarn run dev
```
6. Create a database in MYSQL and connect it with your project via updating .env file.
7. After connecting the db with project, then run command 

```sh
php artisan migrate:fresh --seed
```

After completing the migration and seeding of db, you will have 2 user ready for login in this project. 
<br />
A.  Admin -> Admin
    Email -> admin@example.com
    Pass -> 1234
<br/>
B.  User -> Editor
    Email -> editor@example.com
    Pass -> 1234

Finally we are ready to run our project using this command 

```sh
php artisan serve 
```
in one terminal and also run

```sh
npm run watch 
```
 on another terminal for compiling js and css. 
