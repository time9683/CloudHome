  
# Cloud Home

## api entry points

- /content/:path?
display the files or directorys in the paths

- /upload/:path?
upload file to the path

- /dir/:path?
create a directory in the path

- /donw/:path?
donwload the file in the path

- /rm/:path?
delete file in the path

- /rmdir/:path?
delete directory in the path

### Fist download the project with github

```bash

git clone https://github.com/time9683/CloudHome.git
cd CloudHome
```

### Install the dependencies

```bash
cd api
npm install
cd ../client
npm install
```

### change the .env to the correct value

#### Api

```bash
cd api
code .env 
```

change  CLOUD=/home/luis/shareCloud to the ubication to save files
example :
CLOUD=/home/user/cloud

#### Client

```bash
cd client
code .env
```

change  VITE_API_URL=192.168.156.150 to the correct ip the your machine
**example**:

VITE_API_URL=192.168.1.10

## start the server and client

### api

```bash
cd api
npm run start
```

the server is running in the port 5000

### client

in mode developer

```bash
cd client
npm run dev
```

#### to start the client in the lan network

you have to push your direction ip and you wish port
**ip** = your ip
**port** = your port

```bash
cd client
npx vite --host ip  --port  port
```
