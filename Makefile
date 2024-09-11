SHELL := /bin/bash

.DEFAULT_GOAL := help

.PHONY: build
build:
	docker build -t nextjs-grpc:20 .

.PHONY: up
up:
	docker compose up -d

.PHONY: down
down:
	docker compose down

.PHONY: node
node:
	docker compose exec node bash
