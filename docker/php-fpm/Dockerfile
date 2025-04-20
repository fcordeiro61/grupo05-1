FROM php:8.0-fpm

# Instala extensões necessárias do PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli
#RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
#COPY ./default.conf /etc/nginx/conf.d/default.conf

# Ajusta permissões dos arquivos (necessário para o Apache acessar os arquivos)
#RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Copia configuração customizada opcional do Apache/PHP
#COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

#RUN a2enmod headers

# Ativa o mod_rewrite do Apache (essencial para frameworks modernos)
#RUN a2enmod rewrite

# Ajusta permissões dos arquivos (opcional)
# RUN chown -R www-data:www-data /var/www/html

# Define diretório padrão do apache2 (feito pelo padrão, aqui apenas referência)
WORKDIR /var/www/html