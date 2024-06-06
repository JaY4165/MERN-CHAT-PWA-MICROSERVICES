FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm ci

RUN npm install -g ts-node-dev

COPY . .

RUN npm run start

