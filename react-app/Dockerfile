# ===build===
FROM node:18 AS builder

WORKDIR /src

COPY ./package*.json .
RUN npm install

# ===app===
FROM node:18-alpine

CMD ["npm", "start"]

WORKDIR /app

COPY --from=builder /src/node_modules/ /app/node_modules/

COPY . .
