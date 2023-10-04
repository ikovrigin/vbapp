FROM node:16.17-alpine AS build
WORKDIR /dist/src/app
COPY . .
ENV CI=1
RUN npm ci
RUN npm run build --omit=dev
VOLUME /dist/src/app/dist/frontend
