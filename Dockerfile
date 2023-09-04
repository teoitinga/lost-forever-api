FROM node:12.22.12
WORKDIR /api
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm start" ]