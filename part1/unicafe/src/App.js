import { useState } from 'react';

const Button = (props) => ( 
     <button onClick={props.handleClick}>{props.text}</button>
);

const Title = (props) => (
  <h1>{props.text}</h1>
);

//displays the results of button clicks
const Results = (props) => (
  <p>{props.text} {props.value}</p>
  );


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //updates good's state
  const setNewGood = (value) => {
    setGood(value);
  };

  //updates neutral's state
  const setNewNeutral = (value) => {
    setNeutral(value);
  };

  //updates bad's state
  const setNewBad = (value) => {
    setBad(value);
  }

  return (
    <div className="App">
      <Title text='Give Feedback' />
      <Button handleClick={() => setNewGood(good + 1)} text='Good' />
      <Button handleClick={() => setNewNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setNewBad(bad + 1)} text='Bad' />
      <Title text='Statistics' />
      <Results text= 'Good' value= {good} />
      <Results text= 'Neutral' value= {neutral} />
      <Results text='Bad' value={bad} />
    </div>
  );
}

export default App;
