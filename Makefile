build:
	docker build -t registry.armstead.io/djr-web:latest .

push:
	docker push registry.armstead.io/djr-web:latest
