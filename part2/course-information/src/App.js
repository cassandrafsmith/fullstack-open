const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) =>{ 
  return(
    <div>
      {parts.map(parts => <Part key= {parts.id} parts={parts} />)}
    </div>   
  )
};

//const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Course = ({ course }) => {
  return (
    <div>
      <Header name= {course.name} />
      <Content parts= {course.parts} />
    </div>
  )
};

const Part = ({ parts }) => {
  return (
    <p>{parts.name} {parts.exercises}</p>
  )
};

const App = () => {
  console.log('App log');

  const course = { 
    id: 1,
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {       
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <Course course= {course} />
  )
};

export default App;
