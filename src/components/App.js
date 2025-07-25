
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const tasks = [
  { taskName: "task1", active: true },
  { taskName: "task2", active: true },
  { taskName: "task3", active: true },
  { taskName: "task4", active: true },
  { taskName: "task5", active: true },
  { taskName: "task6", active: true },
  { taskName: "task7", active: true },
  { taskName: "task8", active: true },
  { taskName: "task9", active: true },
  { taskName: "task10", active: true },
  { taskName: "task11", active: true },
  { taskName: "task12", active: true },
  { taskName: "task13", active: true },
  { taskName: "task14", active: true },
  { taskName: "task15", active: true },
  { taskName: "task16", active: true },
  { taskName: "task17", active: true },
  { taskName: "task18", active: true },
  { taskName: "task19", active: true },
  { taskName: "task20", active: true },
  { taskName: "task21", active: true },
  { taskName: "task22", active: true },
  { taskName: "task23", active: true },
  { taskName: "task24", active: true },
  { taskName: "task25", active: true },
  { taskName: "task26", active: false },
  { taskName: "task27", active: false },
  { taskName: "task28", active: false },
  { taskName: "task29", active: false },
  { taskName: "task30", active: false },
  { taskName: "task31", active: false },
  { taskName: "task32", active: false },
  { taskName: "task33", active: false },
  { taskName: "task34", active: false },
  { taskName: "task35", active: false },
  { taskName: "task36", active: false },
  { taskName: "task37", active: false },
  { taskName: "task38", active: false },
  { taskName: "task39", active: false },
  { taskName: "task40", active: false },
  { taskName: "task41", active: false },
  { taskName: "task42", active: false },
  { taskName: "task43", active: false },
  { taskName: "task44", active: false },
  { taskName: "task45", active: false },
  { taskName: "task46", active: false },
  { taskName: "task47", active: false },
  { taskName: "task48", active: false },
  { taskName: "task49", active: false },
  { taskName: "task50", active: false }
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
