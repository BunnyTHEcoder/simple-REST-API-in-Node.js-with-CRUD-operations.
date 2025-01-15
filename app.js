const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// In-memory data store
let items = [];

// Create an item (POST)
app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).send(newItem);
});

// Get all items (GET)
app.get('/items', (req, res) => {
    res.send(items); 
});

// Get a single item by ID (GET)
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send({ message: 'Item not found' });
    res.send(item);
});

// Update an item by ID (PUT)
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send({ message: 'Item not found' });

    item.name = req.body.name; 
    res.send(item); 
});

// Delete an item by ID (DELETE)
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send({ message: 'Item not found' });

    items.splice(itemIndex, 1); 
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
