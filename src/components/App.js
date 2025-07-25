
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const tasks = [
  { taskName: "Todo 1", active: true },
  { taskName: "Todo 2", active: true },
  { taskName: "Todo 3", active: true },
  { taskName: "Todo 4", active: true },
  { taskName: "Todo 5", active: true },
  { taskName: "Todo 6", active: true },
  { taskName: "Todo 7", active: true },
  { taskName: "Todo 8", active: true },
  { taskName: "Todo 9", active: true },
  { taskName: "Todo 10", active: true },
  { taskName: "Todo 11", active: true },
  { taskName: "Todo 12", active: true },
  { taskName: "Todo 13", active: true },
  { taskName: "Todo 14", active: true },
  { taskName: "Todo 15", active: true },
  { taskName: "Todo 16", active: true },
  { taskName: "Todo 17", active: true },
  { taskName: "Todo 18", active: true },
  { taskName: "Todo 19", active: true },
  { taskName: "Todo 20", active: true },
  { taskName: "Todo 21", active: true },
  { taskName: "Todo 22", active: true },
  { taskName: "Todo 23", active: true },
  { taskName: "Todo 24", active: true },
  { taskName: "Todo 25", active: true },
  { taskName: "Todo 26", active: false },
  { taskName: "Todo 27", active: false },
  { taskName: "Todo 28", active: false },
  { taskName: "Todo 29", active: false },
  { taskName: "Todo 30", active: false },
  { taskName: "Todo 31", active: false },
  { taskName: "Todo 32", active: false },
  { taskName: "Todo 33", active: false },
  { taskName: "Todo 34", active: false },
  { taskName: "Todo 35", active: false },
  { taskName: "Todo 36", active: false },
  { taskName: "Todo 37", active: false },
  { taskName: "Todo 38", active: false },
  { taskName: "Todo 39", active: false },
  { taskName: "Todo 40", active: false },
  { taskName: "Todo 41", active: false },
  { taskName: "Todo 42", active: false },
  { taskName: "Todo 43", active: false },
  { taskName: "Todo 44", active: false },
  { taskName: "Todo 45", active: false },
  { taskName: "Todo 46", active: false },
  { taskName: "Todo 47", active: false },
  { taskName: "Todo 48", active: false },
  { taskName: "Todo 49", active: false },
  { taskName: "Todo 50", active: false }
];


const App = () => {
  const [currentTab,setCurrentTab]  = useState('All');
  const[darkMode,setDarkMode] = useState(false);

  const filterTask = useMemo(()=>{
   if(currentTab==='All'){
     return tasks;
   }
   return tasks.filter((item)=>(currentTab==='Active'?item.active===true:item.active===false));
  },[darkMode,currentTab])
  return (
    <div className={darkMode ?'dark':'light'}>
        <button onClick={()=>setCurrentTab('All')}>All</button>      
        <button onClick={()=>setCurrentTab('Active')}>Active</button>      
        <button onClick={()=>setCurrentTab('Completed')}>Completed</button> 
        <button onClick={()=>setDarkMode((prev)=>!prev)}>Toggle Dark Mode</button> 
        <h1>Note: List is artificially slowed down!</h1>
        {
           <ul>
          {
               filterTask.map((item,index)=>(
                 <li key={index}>
                  {item.taskName}
                 </li>
               ))
          }
           </ul>
        } 


    </div>
  )
}

export default App
