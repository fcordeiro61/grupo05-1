FROM nginx:stable

COPY ./default.conf /etc/nginx/conf.d/default.conf

#COPY ./index.html /usr/share/nginx/html/

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
#WORKDIR /var/www/html

