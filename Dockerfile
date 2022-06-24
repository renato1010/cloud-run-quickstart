FROM node:18.4.0-slim

WORKDIR /api

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","start" ]