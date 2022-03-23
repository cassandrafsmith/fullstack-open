import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

//return all persons in the phonebook 
const getAll = () => {    
    const request = axios.get(baseUrl)
    return request.then(response => {       
        return response.data
    })
}

//create a new object containing a person's data
const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then(response => { 
        console.log(response)
        return response.data
    })
}

const remove = (id) => {
    axios.delete(`${baseUrl}/${id}`)  
    console.log('item deleted')      
}

//update a preexisting person's data
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response =>{
        return response.data        
    })
}

//export an object containing the functions
export default {getAll, create, remove, update}