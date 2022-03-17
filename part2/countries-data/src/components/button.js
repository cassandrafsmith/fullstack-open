const Button =({ handleClick, name }) => {
    console.log('button');
    return(
    <button onClick={handleClick} type= 'submit' name={name}>show</button>
)}

export default Button;