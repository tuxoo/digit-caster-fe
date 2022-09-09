#stage 1
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./ ./
RUN npm run build

#stage 2
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

VOLUME /etc/nginx/ssl

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]