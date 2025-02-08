FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn run build

EXPOSE 3000

ENV DATABASE_URL="${DATABASE_URL}"

CMD ["sh", "-c", "npx prisma migrate dev && yarn start:dev"]