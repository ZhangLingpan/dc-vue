FROM nginx:latest
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/ 
EXPOSE 80