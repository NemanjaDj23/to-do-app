FROM php:7.4.3--apache

WORKDIR var/www/server
COPY . .

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000