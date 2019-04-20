# node-express-api

## Logtool HTTP API
This project is about to create and query blog entries. It is  an easy way to get started with a Express server offering a REST API with Node.js

## Features
*	REST API
*	Express

## Requirements
*	node & npm
*	git
* Running instance of MongoDB (default Port)

## Installation
```
	git clone https://github.com/tooneyR/node-express-api.git
 	cd node-express-api
	cd Node-express
	npm install
	npm start
```

## GET Routes
visit http://localhost:3000
*	/blog


## Postman
*	Install Postman to interact with REST API
*	Create a message with:
*	URL: http://localhost:3000/blog
*	Method: POST
*	Body Content: { 
 	"title": "This is a title" ,
 	"date": "2019-04-20" ,
 	"payload": "This is a text"
  }
