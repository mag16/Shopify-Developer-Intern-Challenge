# Shopify-BackEnd Developer-Intern-Challenge

## Dependencies used:
- Express.js: middleware/support for HTTP requests. (npm install express.js)

- Nodemon: Updates server as soon as changes are made to your code. (npm install nodemon)

- Mongoose: connection/Query MongoDb . (npm install Mongoose)

- MongoDb: stores data in key/value pair format. (npm install mongodb)

- npm install will add all dependencies used in this project.


## MongoDb set-up:
- Follow the steps provided [here](https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial) in the tutorial to create a MongoDb Atlas cluster.

- Once you obtain your connection string add that to line 5 in server.js (const url = 'connection string').

## Start server
- npm start

## test routes with Postman
- Postman is an awesome client to test the routes created here.  Sign up for free [here](https://www.postman.com/) to download and start testing.

- Post an item: localhost:3000/inventory with request body of "name": "name of item", "description":"description of item".

- Get all items: after adding a couple of items with a Post request we can now get all items with a get request to localhost:3000/inventory.

- Get one item: provide the id generated to the following route to get the item (GET request) to localhost:3000/inventory/:id.

- Edit an item: provide the id to the url (PUT request) to localhost:3000/inventory/:id and change item name or description.

- Delete an item: provide the id to the url (DELETE request) to localhost:3000/inventory/:id.  This returns the id that was deleted. Run a (Get reqquest) to get new list with deleted item removed.



