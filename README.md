# REST-API-Node.js-CRUD
Here I am creating a simple REST API in Node.js that performs CRUD operations.

How It Works :
Endpoints:
- POST /items: Create a new item and add it to the list.
- GET /items: Retrieve the list of all items.
- GET /items/:id: Get a specific item by its id.
- PUT /items/:id: Update the name of an item by its id.
- DELETE /items/:id: Remove an item by its id.

- In-Memory Data:
The items array serves as a simple storage for data.
Error Handling:

- For invalid id, it sends a 404 status with an appropriate message.

- Run the API:
Install Express:
```terminal
npm install express
```
- Start the server:
```terminal
node app.js
```

-Test endpoints using Postman, CURL, or a browser for GET requests.
Example Testing:
- Create a New Item:
```terminal
curl -X POST -H "Content-Type: application/json" -d '{"name": "Item1"}' http://localhost:3000/items
```
- Get All Items:
```terminal
curl http://localhost:3000/items
```
- Update an Item:
```terminal
curl -X PUT -H "Content-Type: application/json" -d '{"name": "UpdatedItem"}' http://localhost:3000/items/1
```
- Delete an Item:
```terminal
curl -X DELETE http://localhost:3000/items/1
```
