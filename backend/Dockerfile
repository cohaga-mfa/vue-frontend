FROM php:8.1-fpm
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y unzip libpng-dev libonig-dev
RUN docker-php-ext-install pdo pdo_mysql mbstring
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0"]