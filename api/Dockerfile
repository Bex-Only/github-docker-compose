# Stage 1: Build TypeScript
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --include=dev

COPY . .
RUN npm run build

# Stage 2: Run backend
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["npm", "start"]
