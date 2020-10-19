FROM node:14.14
RUN mkdir /code 
WORKDIR /code
COPY package.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
ENTRYPOINT [ "nodemon", "index.js" ]
