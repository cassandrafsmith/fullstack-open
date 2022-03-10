const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) =>{ 
  return(
    <div>
      {parts.map(parts => <Part key= {parts.id} parts={parts} />)}
    </div>   
  )
};

//return total number of course exercises 
const Total = ({parts}) => {
  let initialValue = 0;
  let sum = parts.reduce((s, p) => 
    s + p.exercises, initialValue
  )  
   return(
     <p><b>Total of {sum} exercises</b></p>
   )
};

const Part = ({ parts }) => {
    return (
      <p>{parts.name} {parts.exercises}</p>
    )
  };

const Course = ({ courses }) => {
  return (
    <div>      
      <Header name= {courses.name} />
      <Content parts= {courses.parts} />
      <Total parts={courses.parts} />
    </div>
  )
};


export default Course;