FROM node

WORKDIR /usr/app

COPY package.json /usr/app/

RUN yarn install

COPY . . 

EXPOSE 5500


CMD ["yarn", "start"]