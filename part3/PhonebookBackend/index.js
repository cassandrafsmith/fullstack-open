const express = require('express');
const app = express();

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

//Routes

//GET route for persons
app.get('/api/persons', (request, response) => {
  response.json(persons);
});

//GET route for phonebook info page ** See Notes
app.get('/api/info', (request, response) => {
  let info = `<p>Phonebook has information for ${persons.length} people.</p><p>${new Date()}</p>`;  //HTML in the template literal is pretty neat!
   console.log(info)
  response.send(info);
}); 

//GET route for single resource
app.get('/api/persons/:id', (request, response) =>{
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);

  if(person){
    response.json(person);
  } else {
    response.status(404).end();
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`'Server is running on ${PORT}`);
});


/*NOTES: I just found out that you can pass HTML to the respond.send route in a template literal to format the way the response is shown on Localhost. Interesting... 
Everyday I realize that there is so much that I do not know and so much that I still need to learn! */