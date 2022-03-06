import { useState } from 'react';

const Button = ({handleClick, text}) => (
  <button onClick= {handleClick}>{text}</button>
)

const Title = ({text}) => (
  <h1>{text}</h1>
)

//display the anecdote
const DisplayAnecdote = ({anecdotes, index}) => (
  <div>{anecdotes[index]}</div>   
)
const DisplayVotes = ({votes, index}) => (
  <div>has {votes[index]} votes</div>   
)

//display the anecdote with the most votes
const DisplayPopularAnecdote = ({anecdotes, votes}) => {
  let num = votes[0];
  let index;
  for(let i = 0; i < votes.length; i++){
    if (votes[i] > num){
      num = votes[i];
      index = i;
    }
  }
  return(
  <div>{anecdotes[index]}</div>   
)};

const App = () => {
  const [selected, setSelected] = useState(0);  

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients' 
  ]
 
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  console.log(votes);

  //update selected's state with new random index
  const setNewSelected = () => {
    let num = Math.trunc(Math.random() * anecdotes.length);
    while(num === selected){
      num = Math.trunc(Math.random() * anecdotes.length);
    }
    setSelected(num)
  };
   
  //update vote's state
  const setNewVotes = () =>{
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div className="App">
      <Title text='Anecdote of the Day' />      
      <DisplayAnecdote anecdotes={anecdotes} index={selected} />
      <DisplayVotes votes={votes} index={selected} />
      <Button handleClick={setNewVotes} text='Vote' />
      <Button handleClick={setNewSelected} text='Next Anecdote' />
      <Title text='Anecdote with Most Votes' />
      <DisplayPopularAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
}

export default App;
