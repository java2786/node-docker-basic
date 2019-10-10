Place Dockerfile in project root path
Open cmd/terminal and move to location where Dockerfile is placed
Create image
	docker build -t imageName:tag .
Verify if image is created
	docker images
Run docker image as container
	docker run -p port1:port2 imageName:tag
		port2 is port on which application is running within the container and port1 is port which should be used by the user to connect to the container application