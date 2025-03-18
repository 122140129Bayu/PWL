FROM node:18

# Set direktori kerja di dalam container
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]