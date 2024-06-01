FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

RUN npm install -g ts-node-dev

COPY . .

RUN npm run start

