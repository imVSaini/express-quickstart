FROM node:alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./

USER node

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then yarn install --frozen-lockfile --production; \
    else yarn install --frozen-lockfile; \
    fi

COPY --chown=node:node . .

EXPOSE 4000
