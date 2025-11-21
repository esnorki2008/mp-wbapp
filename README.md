# mp-wbapp

## CONSTUIR IMAGEN BACKEND SIN CACHE
docker build --no-cache -t backend-img .
## CONSTUIR IMAGEN BACKEND CON CACHE
docker build -t backend-img .
## CORRER IMAGEN BACKEND
docker run -p 3000:3000 --name backend-cnd backend-img