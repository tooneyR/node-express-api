# node-express-api

Logtool HTTP API
This project is about to create and query blog entries. It is  an easy way to get started with a Express server offering a REST API with Node.js

Features
•	REST API
•	Express

Requirements
•	node & npm
•	git

Installation
•	git clone https://github.com/tooneyR/node-express-api.git
•	cd Node-express
•	npm install
•	npm start

GET Routes
visit http://localhost:3000
•	/blog


Postman
•	Install Postman to interact with REST API
•	Create a message with:
o	URL: http://localhost:3000/blog
o	Method: POST
o	Body Content: { 
 	"title": "This is a title" ,
 	"date": "2019-04-20" ,
 	"payload": "This is a text"
}
