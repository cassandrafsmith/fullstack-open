//Returns App Header
const Header = (props) =>{
  console.log(props);
  return(
    <h1>{props.course.name}</h1>
  )
};

//returns name of part and number of exercises
const Part = (props) => {
  console.log(props);
  return(
    <p>{props.object.name} {props.object.exercises}</p>
)
}

//returns combined block of parts 
const Content = (props) => {
  console.log(props);
  return(
    <div> 
      <Part object= {props.course.parts[0]} />
      <Part object= {props.course.parts[1]} />
      <Part object= {props.course.parts[2]} />
    </div>
)
};

//returns total number of exercises
const Total = (props) => {
  console.log(props);

  const sum = (n1, n2, n3) => {
    return n1 + n2 + n3;
  }

  return(
    <p>Number of exercises {sum(props.course.parts[0].exercises, props.course.parts[1].exercises, props.course.parts[2].exercises)} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {name: 'Fundamentals of React',
      exercises: 10
      },
      {name: 'Using props to pass data',
        exercises: 7
      },
      {name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />      
      <Content course= {course} />
      <Total course= {course} />
    </div>
  )
};

export default App;
