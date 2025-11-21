# mp-wbapp
# Backend
## CONSTUIR IMAGEN BACKEND SIN CACHE
docker build --no-cache -t backend-img .
## CONSTUIR IMAGEN BACKEND CON CACHE
docker build -t backend-img .
## CORRER IMAGEN BACKEND
docker run -p 3000:3000 --name backend-cnd backend-img

# Frontend
## CONSTRUIR IMAGEN FRONTEND
docker build -t frontend .
## CORRER IMAGEN FRONTEND
docker run -p 8080:80 frontend