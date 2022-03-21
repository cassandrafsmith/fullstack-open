import Button from "./button";

const Name = ({ array, handleClick }) => {
    console.log('Name...')
    return(
        <div>
            {array.name.common} <Button handleClick={handleClick} name={array.name.common} />
        </div>
    
)};

export default Name;