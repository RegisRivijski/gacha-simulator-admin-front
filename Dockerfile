FROM nginx:alpine

RUN apk --no-cache update && \
    apk --no-cache upgrade && \
    apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Europe/Kiev /etc/localtime && \
    echo "Europe/Kiev" >  /etc/timezone

WORKDIR /app

COPY package.json package.json

RUN apk add --no-cache nodejs npm

COPY . .

RUN rm -rf /app/node_modules
RUN rm /app/package-lock.json

RUN npm install
