run:
	docker stop addis-test-container
	docker rm addis-test-container
	docker build -t addis-test .
	docker run -d -p 3600:3600 --name addis-test-container addis-test

log:
	docker logs -f addis-test-container
