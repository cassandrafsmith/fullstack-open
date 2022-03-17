import Button from "./button";

//*** work on the onClick function............................................................................................
const Name = ({ array, handleClick }) => {
    console.log('Name...')
    return(
        <div>
            {array.name.common} <Button handleClick={handleClick} name={array.name.common} />
        </div>
    
)};

export default Name;