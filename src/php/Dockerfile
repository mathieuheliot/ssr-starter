FROM php:7.2.9-apache

COPY ./config/vhost.conf /etc/apache2/sites-available/000-default.conf
COPY . /var/www/html/

RUN a2enmod rewrite

EXPOSE 80
EXPOSE 443
