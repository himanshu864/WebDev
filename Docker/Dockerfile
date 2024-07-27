FROM node

RUN apt-get update
RUN apt-get upgrade -y

COPY . .

RUN npm install

ENTRYPOINT [ "node", "app.js" ]
