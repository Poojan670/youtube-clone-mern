FROM node:alpine

WORKDIR /src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

RUN yarn add -g nodemon

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]