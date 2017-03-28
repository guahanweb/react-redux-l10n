FROM node:6.10.0-alpine

RUN npm config set @dtss:registry http://npm.cloud.corp.dig.com

EXPOSE 4118
ENV APP_ID=EPC-PERMISSIONSCENTER-UI
ENV APP_ENV=PROD
ENV DOCKERIZED=true

RUN mkdir -p /app

COPY app/package.json /app/
WORKDIR /app
RUN npm i --only-prod --ignore-scripts --silent --depth=0
COPY app /app

RUN chown -R node:node /app

USER node

CMD ["npm", "start"]
