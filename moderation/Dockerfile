# Lightweight Node 20 Alpine
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src

EXPOSE 4001

CMD ["npx", "ts-node", "src/server.ts"]
