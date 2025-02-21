# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Copia os arquivos do site para o Nginx
COPY . /usr/share/nginx/html

# Exibe uma mensagem no log para confirmar que iniciou
CMD ["nginx", "-g", "daemon off;"]