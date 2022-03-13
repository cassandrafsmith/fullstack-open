const InputForm = (
    {handleNameInput, handleNumberInput, newName, newNumber, addName}) => {
    return(
        <form>
        <div>
          name: <input onChange= {handleNameInput} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberInput} value={newNumber} />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>               
      </form>
    )
}

export default InputForm;