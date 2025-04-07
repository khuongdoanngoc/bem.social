# BEM Social Docker Setup

Hướng dẫn cấu hình Docker cho dự án BEM Social.

## Cấu trúc thư mục

```
docker/
├── dockerfiles/                # Dockerfile cho từng service
│   ├── api-gateway.Dockerfile  # Dockerfile cho API Gateway
│   ├── auth-service.Dockerfile # Dockerfile cho Auth Service
│   └── ...
├── nginx/                      # Cấu hình Nginx
│   ├── conf.d/                 # Cấu hình các server blocks
│   │   └── bem-social.conf     # Cấu hình cho bemsocial.com
│   └── nginx.conf              # Cấu hình Nginx chính
├── scripts/                    # Scripts hỗ trợ
│   └── create-multiple-postgresql-databases.sh  # Script tạo nhiều database
├── .dockerignore               # File loại bỏ khi build image
├── docker-compose.yml          # File cấu hình Docker Compose cho môi trường dev
├── docker-compose.prod.yml     # File cấu hình Docker Compose cho môi trường prod
├── Makefile                    # Makefile để quản lý các lệnh Docker
└── README.md                   # File hướng dẫn này
```

## Cài đặt và sử dụng

### Yêu cầu

- Docker >= 20.10.0
- Docker Compose >= 2.0.0

### Môi trường Development

```bash
# Xây dựng và khởi động các containers
cd docker
make build
make up

# Xem logs
make logs

# Dừng các containers
make down

# Khởi động lại các containers
make restart

# Xem trạng thái các containers
make ps

# Dọn dẹp hoàn toàn (xóa containers, volumes, networks)
make clean
```

### Môi trường Production

```bash
# Tạo file .env cho production
cp .env.example .env
# Chỉnh sửa các biến môi trường trong file .env

# Xây dựng images cho production
make prod-build

# Khởi động containers cho production
make prod-up
```

## Microservices

### API Gateway
- Port: 3000
- URL: http://localhost:3000
- Swagger UI: http://localhost:3000/api

### Auth Service
- Port: 3001
- URL: http://localhost:3001
- Swagger UI: http://localhost:3001/api

### Database
- PostgreSQL
- Port: 5432
- Databases:
  - bem_social (API Gateway)
  - bem_social_auth (Auth Service)
  - bem_social_user (User Service - sẽ implement sau)
  - ...

### Redis
- Port: 6379
- Sử dụng cho caching và rate limiting

## SSL Certificates (Production)

Trước khi triển khai production, cần tạo SSL certificates:

```bash
# Tạo thư mục cho SSL certificates
mkdir -p docker/nginx/ssl

# Tạo self-signed certificates (chỉ dùng cho testing)
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout docker/nginx/ssl/bemsocial.key -out docker/nginx/ssl/bemsocial.crt
```

Trong môi trường production thực tế, nên sử dụng Let's Encrypt hoặc các dịch vụ SSL certificates khác. 