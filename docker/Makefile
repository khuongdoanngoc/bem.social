.PHONY: up down build restart logs ps clean help

# Variables
COMPOSE_FILE = docker-compose.yml
COMPOSE_PROD_FILE = docker-compose.prod.yml

help:
	@echo "Available commands:"
	@echo "  up          - Start all containers (development)"
	@echo "  down        - Stop all containers"
	@echo "  build       - Build all containers"
	@echo "  restart     - Restart all containers"
	@echo "  logs        - View logs"
	@echo "  ps          - List running containers"
	@echo "  clean       - Remove all containers, volumes, networks"
	@echo "  prod-up     - Start all containers (production)"
	@echo "  prod-build  - Build all containers (production)"

up:
	docker compose -f $(COMPOSE_FILE) up -d

down:
	docker compose -f $(COMPOSE_FILE) down

build:
	docker compose -f $(COMPOSE_FILE) build

restart:
	docker compose -f $(COMPOSE_FILE) restart

logs:
	docker compose -f $(COMPOSE_FILE) logs -f

ps:
	docker compose -f $(COMPOSE_FILE) ps

clean:
	docker compose -f $(COMPOSE_FILE) down -v --rmi all

prod-up:
	docker compose -f $(COMPOSE_PROD_FILE) up -d

prod-build:
	docker compose -f $(COMPOSE_PROD_FILE) build 