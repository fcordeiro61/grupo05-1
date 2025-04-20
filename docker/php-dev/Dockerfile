# Use uma imagem oficial do PHP com Composer
FROM php:8.0-cli

# Instala extensões necessárias do PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli

# Instalar dependências necessárias para o Composer
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip

# Instalar o Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Definir o diretório de trabalho dentro do container
WORKDIR /var/www

# Comando que será executado quando o container for iniciado
#CMD ["php", "-a"]
# Rodar o bash automaticamente quando o container for iniciado
CMD ["tail", "-f", "/dev/null"]
