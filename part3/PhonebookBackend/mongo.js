const mongoose = require('mongoose')


if(process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <<password>>')
    process.exit(1)
}
else if (process.argv.length > 5) {
    console.log('Too many arguments. Please adjust arguments and try again.')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://cfsmith:${password}@cluster0.40pcb.mongodb.net/phonebook?retryWrites=true&w=majority`


mongoose.connect(url)

//person schema
const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

//person model definition
const Person = mongoose.model('Person', personSchema)

//person object created with the help of the Person model
const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})



if (process.argv.length === 3){
Person.find({}).then(results => {
    results.forEach(person => {
        console.log(person)
    })
    mongoose.connection.close()
})
}

else if (process.argv.length === 4 || process.argv.length === 5){
    person.save().then(results => {
        console.log('person saved!')
        mongoose.connection.close()
    })
}
