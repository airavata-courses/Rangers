#!\bin\sh

docker kill react_ui || true

docker rm react_ui || true

docker rmi react_ui || true

docker build -t react_ui .

docker run -p 3000:3000 --name react_ui react_ui & 
