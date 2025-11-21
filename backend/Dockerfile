# TS a JS
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar
RUN npm install

# Copiar código
COPY . .

# Compilar
RUN npm run build


# Correr JS
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar
RUN npm install --omit=dev

# Copiar build ya compilado
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/infrastructure/server/index.js"]
