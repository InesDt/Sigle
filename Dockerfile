FROM node:9.7.1

RUN apt-get update && apt-get -y install \
  inotify-tools=3.14-1+b1 \
  rsync=3.1.1-3+deb8u1

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["./startupDev.bash"]
