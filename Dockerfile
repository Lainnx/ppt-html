#Versión de la imagen que vamos a utilizar
FROM httpd:2.4
COPY ./ /usr/local/apache2/htdocs/
