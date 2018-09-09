FROM node:10

RUN mkdir -p /usr/src/app
RUN chown -R node /usr/src/app
USER node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --production

EXPOSE 8080

CMD npm start
