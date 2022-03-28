const express = require('express');
const morgan = require('morgan');

const app = express();

morgan.token('info', (request, response) => (
  JSON.stringify(request.body))
)

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :info'))


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

const createId = () => {
  return Math.trunc(Math.random() * 1000);
};

//Routes

//POST route to add person to persons
app.post('/api/persons', (request, response) => {
  const body = request.body;
  //console.log(body)

  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'name or number missing'
    })
  };

  if(persons.find(person => person.name === body.name) ){
    return response.status(409).json({
      error: 'name already exists'
    })
  };

  const person = {
    id: createId(),
   name: body.name,
   number: body.number
  };

  persons = persons.concat(person);
  response.json(person);
});


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

//DELETE route to remove a single resource
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.filter(person => person.id !== id);
  response.status(204).end();
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`'Server is running on ${PORT}`);
});


/*NOTES: 
- I am going to use semicolons to end my code in this section (3a). I am wanting to see if
  it is as comfortable as it was for me while coding in Java. 
- I just found out that you can pass HTML to the respond.send route in a template literal
   to format the way the response is shown on Localhost. Interesting... 
- Everyday I realize that there is so much that I do not know and so much that I still need to learn! */