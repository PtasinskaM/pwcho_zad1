#działa
FROM nginx:alpine
COPY ./src /usr/share/nginx/html
EXPOSE 80
#-g unknown operand w docker logs zadanie1
#CMD [ "nginx", "-g" "daemon off;" ]
