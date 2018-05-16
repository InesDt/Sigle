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


start:
	sudo docker run \
		--rm \
		-d \
		--name $(image_name)_elastic \
		--network host \
		-p 9200:9200 \
		-p 9300:9300 \
		-e "discovery.type=single-node" \
		docker.elastic.co/elasticsearch/elasticsearch:6.2.3

stop:
	sudo docker container ls -f=name=$(image_name)_elastic --quiet \
		| xargs -r -n1 sudo docker container kill
	sudo docker container prune -f

restart: stop start
