<p align="center">
  <a href="https://www.kindpng.com/picc/m/95-956807_mern-stack-developer-hd-png-download.png"><img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="Spring Boot" height="200"></a>
</p>

<p align="center">
    <em>MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. </em>
</p>

---

**Source Code**:

https://github.com/reactjs/reactjs.org.git

---

What is the MERN stack?

MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

MongoDB — document database

Express(.js) — Node.js web framework

React(.js) — a client-side JavaScript framework

Node(.js) — the premier JavaScript web server

How does the MERN stack work?

The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.


<p align="center">
  <a href="https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress"><img src="https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress" alt="Spring Boot" height="200"></a>
</p>


## Project Description

_FullStack Youtube Clone Web Application Using React as Frontend, Node JS as backend on express server, MongoDB as database_

## Requirements

Node 14+

npx/npm/node

mongodb+

## Installation

<div class="termy">

***CLIENT SETUP***

Setup an .env.development file in frontend/ with following sample
```console
 // For Firebase Configurations

REACT_APP_API_KEY=""
REACT_APP_AUTH_DOMAIN=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MISSING_SENDER_ID=""
REACT_APP_APP_ID=""
```
</div>

<div class="termy">

Install Using yarn package

```console
$ yarn
```
</div>

<div class="termy">

Run the Project
```console
$ yarn start:development
```
</div>


<div class="termy">


***SERVER SETUP***

Setup an .env file in backend/ with following sample
```console
 // For MongoDB & Node JS Configurations

PORT=
DB_HOST=''
DB_NAME=''
JWT_KEY=''

```
</div>

<div class="termy">

Install Using yarn package

```console
$ yarn
```
</div>

<div class="termy">

Run the Project
```console
$ yarn start
```
</div>


<div class="termy">

Follow the swagger Ui Documentation
```console
http://{SERVER_HOST}:{SERVER_PORT}/doc
```
</div>

<div class="termy">

Run the Project Concurrently At Once (OPTIONAL)

```console
$ cd backend && yarn run dev
```

</div>

# Try it out with [Docker](https://www.docker.com/)

<div class="termy">

Dockerize Personally (OPTIONAL)

```console
$ docker build -t ytc-backend .
$ docker build -t ytc-frontend .

$ docker run -p 5000:80 ytc-backend 
$ docker run -p 3000:80 ytc-frontend 
```

</div>

<div class="termy">

Run the Project via Docker Compose Directly

```console
$ docker-compose up 
```

</div>
