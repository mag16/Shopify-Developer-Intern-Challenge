# Shopify-BackEnd Developer-Intern-Challenge

## Dependencies used:
- Express.js: middleware/support for HTTP requests. (npm install express.js).

- Nodemon: Updates server as soon as changes are made to your code. (npm install nodemon).

- Mongoose: connection/Query MongoDb . (npm install Mongoose).

- MongoDb: stores data in key/value pair format. (npm install mongodb).

- .env: hide ur keys. (npm install dotenv)

- npm install will add all dependencies used in this project.


## MongoDb set-up:
- Follow the steps provided [here](https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial) in the tutorial to create a MongoDb Atlas cluster. Scroll down and
start at "Create a MongoDB Atlas cluster".

- Once you obtain your connection string add that to line 6 in server.js (const url = 'connection string').

- for testing purposes you can go ahead and just clone the repository and test endpoints with a client app like Postman (instructions below).

## Start server
- npm start

## test routes with Postman
- Postman is an awesome client to test the routes created here.  Sign up for free [here](https://www.postman.com/) to download and start testing.


## Routes defined
- Post an item: localhost:3000/inventory with request body of "name": "name of item", "description":"description of item" to (POST).

- Get all items: after adding a couple of items with a Post request we can now get all items with a get request (GET) to localhost:3000/inventory.

- Get one item: provide the id generated to the following route to get the item (GET request) to localhost:3000/inventory/:id.

- Edit an item: provide the id to the url (PUT request) to localhost:3000/inventory/:id and change item name or description.

- Delete an item: provide the id to the url (DELETE request) to localhost:3000/inventory/:id.  This returns the id that was deleted. Run a (GET request) to get new list with deleted item removed.

## Ability to create warehouses/locations and assign inventory to specific locations

- Post a location: localhost:3000/locations with request body of "name": "name of location", "location":"address of location" to (POST).

- Get all locations: after adding a couple of locations with a Post request we can now get all locations with a get request (GET) to localhost:3000/locations.

- We can then get id's of each location and add items to them (with ids) or manually to (POST) localhost:3000/locations/:id.





