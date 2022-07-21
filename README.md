## Build
docker build --tag blog-react:latest .       \
or use docker-compose: \
docker-compose up -d --build


### Build Development
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build \
docker-compose -f docker-compose.yml -f docker-compose-dev.yml down


### Build Production
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build \
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down

## Start
docker run --name blog -p 3000:3000 -d blog-react:latest

for windows, we need some tweak to get auto update working \
docker run -e WATCHPACK_POLLING=true --name blog -p 3000:3000 -d blog-react:latest

mounting for workflow
docker run -e WATCHPACK_POLLING=true --name blog -v %cd%\src:/app/src:ro -p 3000:3000 -d blog-react:latest 

pass env
docker run -e WATCHPACK_POLLING=true --env-file ./.env --name blog -v %cd%\src:/app/src:ro -p 3000:3000 -d blog-react:latest 

use docker-compose
docker-compose up -d (build & start)
docker-compose down (quit&remove)

## Access
localhost:3000