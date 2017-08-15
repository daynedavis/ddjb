FROM node:8.1.3

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm cache clean --force
RUN npm install
COPY . /usr/src/app/

ENV NODE_ENV=production
EXPOSE 8080

CMD [ "npm", "run", "bnrprod"]
