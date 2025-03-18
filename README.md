# PWL# Microservices Node.js dengan Docker

Proyek ini adalah implementasi arsitektur **Microservices** menggunakan **Node.js**, **Express**, dan **PostgreSQL**. Setiap layanan memiliki fungsionalitas spesifik yang dijalankan di dalam Docker container.

## Prasyarat
1. **Docker** dan **Docker Compose** harus terinstal di sistem Anda.
   - Cek instalasi:  
     ```bash
     docker --version
     docker-compose --version
     ```

## Cara Menjalankan Proyek

### 1. Clone Repository
```bash
git clone <URL_REPO>
cd microservices-app
```

### 2. Jalankan Docker Compose
```bash
docker-compose up --build
```

Proses ini akan:
- Membangun container untuk **API Gateway**, **Auth Service**, **User Service**, **Post Service**, **Vote Service**, dan **Database**.
- Menjalankan seluruh aplikasi di lingkungan Docker.

### 3. Verifikasi Container Berjalan
```bash
docker ps
```
Pastikan semua service dan database berjalan dengan benar.

## Endpoint API

### 1. API Gateway (Port: 3000)
- `POST /api/auth/login` - Login pengguna
- `GET /api/users` - Ambil daftar pengguna
- `POST /api/posts` - Buat post baru
- `POST /api/votes` - Kirim vote

### 2. Database (Port: 5432)

Mengakses PostgreSQL di dalam Docker:
```bash
docker exec -it <CONTAINER_ID> psql -U user
```

## Contoh Data di `init.sql`

Database terpisah untuk setiap service:
- **auth_db**: Informasi pengguna
- **user_db**: Data profil
- **post_db**: Data posting
- **vote_db**: Data voting

## Menghentikan Semua Service
```bash
docker-compose down
```

## Troubleshooting

1. **Docker tidak dikenali**:
   - Pastikan Docker diinstal dan berjalan: `docker info`
2. **Service tidak berjalan**:
   - Cek log dengan: `docker-compose logs`
