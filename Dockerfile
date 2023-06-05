# Imagen a usar
FROM node:latest

# Ruta en el contenedor
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4002

ENTRYPOINT [ "node", "server.js" ]