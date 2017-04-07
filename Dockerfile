FROM node:6.10.0-alpine

RUN npm config set @dtss:registry http://npm.cloud.corp.dig.com

EXPOSE 4118
ENV APP_ID=EPC-PERMISSIONSCENTER-UI
ENV APP_ENV=PROD
ENV DOCKERIZED=true

RUN mkdir -p /app

COPY app/package.json /app/
WORKDIR /app
COPY app /app

# run tests and then clean up
RUN npm i
RUN npm test
RUN rm -rf node_modules

# run prod-only install
RUN npm i --only-prod --ignore-scripts --silent --depth=0

RUN chown -R node:node /app

USER node

CMD ["npm", "start"]
