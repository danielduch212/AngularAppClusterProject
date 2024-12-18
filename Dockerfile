FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/frontend-solution-front1/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
