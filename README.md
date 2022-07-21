## Build
docker build --tag blog-react:latest .       
## Start
docker run --name blog -p 3000:3000 -d blog-react:latest
## Access
localhost:3000

## Deploy
Remove WATCHPACK_POLLING=true from package.json "script" as it's there for windows development