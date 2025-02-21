# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Define o diretório padrão
WORKDIR /usr/share/nginx/html

# Copia os arquivos do site para o Nginx
COPY . .

# Exibe uma mensagem no log para confirmar que iniciou
CMD ["nginx", "-g", "daemon off;"]
