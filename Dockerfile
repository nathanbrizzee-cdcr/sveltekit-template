FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json /app/
COPY /usr/local/share/ca-certificates/ZscalerRoot.crt /usr/local/share/ca-certificates/ZscalerRoot.crt
RUN cat /usr/local/share/ca-certificates/ZscalerRoot.crt >> /etc/ssl/certs/ca-certificates.crt
RUN update-ca-certificates

RUN npm ci

COPY . .

ENV NODE_BUILD=true

RUN npm run build

CMD node build

FROM node:18-alpine as production

COPY --from=builder ./build .

ENV NODE_ENV=production

EXPOSE 3000

CMD node ./build
