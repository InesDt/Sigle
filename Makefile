image_name = sigle
pwd = $(shell pwd)

all: devServer

devServer: dev
	sudo docker run \
		--rm \
		--network=host \
		--mount type=bind,source=$(pwd),target=/mnt,readonly \
		-it \
		$(image_name)

dev:
	sudo docker build \
		--rm \
		--network=host \
		--tag=$(image_name) \
		.

clean:
	sudo docker container prune -f
	sudo docker image rm $(image_name)
	sudo docker image prune -f
