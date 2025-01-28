import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{title : "todo1", done : false},{title : "todo2", done : true}])

  return (
    <>
      <div>
      <TodoAdder todos={todos} setTodos={setTodos}></TodoAdder>
        <TodoShower todos={todos} setTodos={setTodos}></TodoShower>
        
      </div>
    </>
  )
}

function TodoShower({todos,setTodos}) {
  return (
    <>
     <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  margin: '5px', 
                  padding: '5px', 
                  border: '1px solid black', 
                  width: '1350px' , 
                  backgroundColor: 'lightblue', 
                  borderRadius: '5px', 
                  boxShadow: '5px 5px 5px grey'
                }}>
        {
          todos.map((element, index) => (
            <div>
                <div 
                     key={index} 
                     style={{ 
                              backgroundColor: element.done ? 'green' : 'red', 
                              margin: '5px' , 
                              padding: '5px',
                              border: '1px solid black', 
                              borderRadius: '5px', 
                              boxShadow: '5px 5px 5px grey',
                              height: '50px'
                            }}>
                    <div>Title: {element.title}</div> 
                     <div key={index+1 }>
                        <button 
                                key={index+2}
                                onClick={() =>{ 
                                    const newTodo = todos.map((element,i) => { i === index ? element.done = true : element.done = element.done; 
                                          return element;}); 
                                    setTodos(newTodo);
                                }}>
                                 Done
                        </button>
                    </div> 
              </div>
                              
            </div>
              
        ))
        }
      </div>
    </>
  )
}

function TodoAdder({todos,setTodos}) {
  const [title, setTitle] = useState('')

  return (
    <>
      <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    marginLeft: '500px',
                    marginBottom: '50px',
                    marginTop: '50px',  
                    padding: '55px', 
                    border: '1px solid black', 
                    width: '200px' , 
                    backgroundColor: 'lightblue', 
                    borderRadius: '5px', 
                    boxShadow: '5px 5px 5px grey'
                  }}>
            <form onSubmit={(e) => {
                                      e.preventDefault();
                                      setTodos([...todos, {title : title, done : false}]);
                                      setTitle("");
                                      e.target.reset()
                                    }}>
                  <label>
                    Title:
                    <input id="mainInput" onChange={(event)=>setTitle(event.target.value)} type="text" title="title" />
                  </label>
                  <br/>
                  <input type="submit" value="Submit" />
            </form>
      </div>
    </>
  )
}

//counter  app 
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <CounterButton count={count} setCount={setCount}></CounterButton>
//       </div>
//     </>
//   )
// }

// function CounterButton({count,setCount}) {
//   return (
//     <>
//       <div>
//         <button onClick={() => setCount(count+1)}>
//           counter:  { count }
//         </button>
//       </div>
//     </>
//   )
// }

export default App
