#Versión de la imagen que vamos a utilizar
FROM httpd:2.4
COPY ./ /usr/local/apache2/htdocs/


#docker login
#docker tag juego:latest username/repo-name (juego:latest, en vez de juego el nombre que tenga la imagen)
#docker push username/repo-name:tag

# docker build -t juego .
# docker run -d --name mijuego -p 8080:80 juego:latest