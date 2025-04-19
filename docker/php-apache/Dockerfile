FROM php:8.0-apache

# Instala extensões necessárias do PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli

# Ativa o mod_rewrite do Apache (essencial para frameworks modernos)
RUN a2enmod rewrite

# Copia configuração customizada opcional do Apache/PHP
# COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Ajusta permissões dos arquivos (opcional)
# RUN chown -R www-data:www-data /var/www/html

# Define diretório padrão do apache2 (feito pelo padrão, aqui apenas referência)
WORKDIR /var/www/html