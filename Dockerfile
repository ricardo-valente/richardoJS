FROM node:alpine

RUN apk add --no-cache bash

WORKDIR /usr/web

COPY . .

RUN yarn install

CMD ["npm", "start"]