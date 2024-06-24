helth:
	docker ps -aq

start: 
	docker-compose up --build

down: 
	docker-compose down

rebuild: start && down

to-workspace:
	docker exec -it tasker_web bash

migrate:
	docker exec -it tasker_web bash bin/rails db:migrate

start-vite:
	@docker exec -it tasker_web /bin/sh -c "yarn && ./bin/vite dev"