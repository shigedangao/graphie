FROM node:16-bullseye

ENV APP_PATH=graphie

COPY . ${APP_PATH}

WORKDIR ${APP_PATH}

RUN npm install && \
    npm run gen-proto && \
    npm run build-ts

CMD ["npm", "run", "serve"]
