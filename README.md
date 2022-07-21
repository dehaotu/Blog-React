## Build
docker build --tag blog-react:latest .       
## Start
docker run --name blog -p 3000:3000 -d blog-react:latest

for windows, we need some tweak to get auto update working 
docker run -e WATCHPACK_POLLING=true --name blog -p 3000:3000 -d blog-react:latest
## Access
localhost:3000