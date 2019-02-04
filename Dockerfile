FROM node:8.10.0-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app

CMD yarn start

EXPOSE 3000