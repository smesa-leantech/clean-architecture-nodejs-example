# Imagen base de Node.js
FROM node:14

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

# Instalar las dependencias de la aplicación
RUN npm install

# Compilar la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]