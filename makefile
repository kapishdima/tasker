helth:
	docker ps -aq
start: 
	docker-compose up --build 
to-workspace:
	docker exec -it tasker_web bash
migrate:
	docker exec -it tasker_web bash bin/rails db:migrate