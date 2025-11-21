# BUILD FRONTEND
FROM node:20-alpine AS builder

# Crear directorio
WORKDIR /app

# Copiar pdependencias
COPY package*.json ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./

# Instalar dependencias
RUN npm install

# Copiar todo
COPY . .

# Build prod
RUN npm run build


# 2 Correr nginx server estatico
FROM nginx:alpine

# Borrar config
RUN rm -rf /usr/share/nginx/html/*

# Copiar build generado 
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puertos
EXPOSE 80

# Usar configx
CMD ["nginx", "-g", "daemon off;"]
