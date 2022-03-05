import { useState } from 'react';

const Button = (props) => ( 
     <button onClick={props.handleClick}>{props.text}</button>
);

const Title = ({text}) => (
  <h1>{text}</h1>
);

  //statistics component
  const Statistics =({good, neutral, bad}) => {    
    const sum = good + neutral + bad;
    const average = ((good * 1 + bad * - 1) / sum);
    const posFeedback = (good / sum) * 100;
 
    if(sum > 0){
      return(
        <div>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {sum}</p>
          <p>Average {average}</p>
          <p>Positive {posFeedback}%</p>
        </div>
      );
    };
    return ('No Feedback Given');
  };


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //updates good's state
  const setNewGood = () => {
    setGood(good + 1)};

  //updates neutral's state
  const setNewNeutral = () => {
    setNeutral(neutral + 1)};

  //updates bad's state
  const setNewBad = () => {
    setBad(bad + 1)};


  return (
    <div className="App">
      <Title text='Give Feedback?' />
      <Button handleClick={setNewGood} text='Good' />
      <Button handleClick={setNewNeutral} text='Neutral' />
      <Button handleClick={setNewBad} text='Bad' />
      <Title text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
