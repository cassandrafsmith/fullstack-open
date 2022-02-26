const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
};

const Part = (props) => {
  return(
    <p>{props.parts} {props.exercises}</p>
)
}

const Content = (props) => {
  return(
    <div> 
      <Part parts = {props.cpart.part1} exercises = {props.cpart.exercises1} />
      <Part parts = {props.cpart.part2} exercises = {props.cpart.exercises2} />
      <Part parts = {props.cpart.part3} exercises = {props.cpart.exercises3} />
    </div>
)
};

const Total = (props) => {
  return(
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development';

//created an object to store part and exercises data
  const parts = {part1: 'Fundamentals of React',
                exercises1: 10,
                part2: 'Using props to pass data',
                exercises2: 7,
                part3:'State of a component',
                exercises3: 14};

  return (
    <div>
      <Header course={course} />      
      <Content cpart = {parts} />
      <Total total= {parts.exercises1 + parts.exercises2 + parts.exercises3} />
    </div>
  )
};

export default App;
