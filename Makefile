SHELL = /bin/sh

FOLDER     := $(shell pwd)
USER_ID    := $(shell id -u)
GROUP_ID   := $(shell id -g)

NODE_VERSION         := 22.16.0
ANGULAR_CLI_VERSION  := 20.0.1

create:
	@docker run -it --rm -u $(USER_ID):$(GROUP_ID) -v "$(FOLDER):/srv" -w /srv node:$(NODE_VERSION) bash -c \
	"npm config set prefix /tmp/.npm-global && export PATH=/tmp/.npm-global/bin:\$$PATH && \
	npm install -g @angular/cli@$(ANGULAR_CLI_VERSION) && ng new todoapp --defaults --skip-git --directory=."

start:
	@USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker-compose -f ./docker/docker-compose.yml -p angular up -d

stop:
	@USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker-compose -f ./docker/docker-compose.yml -p angular down

in:
	@docker exec -it -u $(USER_ID):$(GROUP_ID) angular bash