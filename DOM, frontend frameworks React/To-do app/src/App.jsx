import { useState } from "react"; // to define any state that we want react to watch
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [todos, settodos]=useState([{
    title:"title 1",
    description:"Desc 1",
    completed:false
  },{
    title:"title2",
    description:"desc 2",
    completed:false
  },{
    title:"title 3",
    description:"desc 3",
    completed:false
  }]);
  
// this function is getting updated in colnsole but not in app coz we have to define state in react sysntx so that react re-renders it and watches it every time
  // function onclickhandlerwithoutReact(){
  //   state.count++;
  //   console.log(state.count); 
  // }
  function addtodo(){ //rerendering function for our button
    settodos([...todos,{ ///[...todo] is syntax to spread out todo list and then , we can add whateber we like 
      title:"New to do added",
      description:"New desc added" 
    }])
  }
    return(
      <div>
        <button onClick={addtodo}>Add To Do</button>
          {
            todos.map(function(todo){
              return <CustomButton title={todo.title} description={todo.description}></CustomButton>
            })
          }
      </div>
    )
  }

  //component : takes input of state : it's useful becoz now we can use this component to connect with other compoinents without the need of writing it from scratch
function CustomButton(props){ //props is state that we are giving input in component
   return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
   ) 
  }
export default App
