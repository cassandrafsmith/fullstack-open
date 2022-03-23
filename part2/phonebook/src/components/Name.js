
const Name = ({ array, removeName }) => {
  return(   
      <li>
        {array.name} {array.number} 
        &nbsp;
        <button onClick={() => removeName(array.name, array.id)} type='submit'>delete</button>
      </li>          
  )}

  export default Name;