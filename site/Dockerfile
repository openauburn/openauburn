FROM node:16.16.0-alpine

WORKDIR /usr/app

COPY . .

ENV NEXT_PUBLIC_API_BASE_URL_DOCKER=http://localhost:8080/api

RUN npm ci --only-production

RUN npm run build

CMD ["npm", "start"]