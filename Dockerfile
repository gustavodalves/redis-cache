FROM node:alpine

WORKDIR /usr/redis-cache

COPY package.json ./

RUN npm i

COPY . .

CMD ["yarn", "dev"]