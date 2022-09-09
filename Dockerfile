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
COPY /etc/ssl/digit-caster.crt /etc/nginx/ssl/digit-caster.crt
COPY /etc/ssl/digit-caster.key /etc/nginx/ssl/digit-caster.key

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]