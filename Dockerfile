FROM nginx

COPY dist/ebs-webapp /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80