FROM node:18.17.1-alpine AS production

WORKDIR /app
RUN npm install -g pnpm
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build
FROM nginx:alpine
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=production /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
