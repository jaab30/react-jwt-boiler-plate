FROM node:alpine
WORKDIR /app
COPY . .
RUN npm run install
RUN npm run build
