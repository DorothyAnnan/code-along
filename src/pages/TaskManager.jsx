import{list} from 'postcss';
import React,{useState} from"react";
import { useEffect } from 'react';
import{v4 as uuid} from "uuid";
import TaskItem from "../components/TaskItem";


function TaskManager(){
    const[tasks, setTasks] = useState(()=>{
      //get the task from the localStorage
      const tasks = localStorage.getItem("tasks");
      if (!tasks) return [];
      return JSON.parse(tasks);
     });

  const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input ==="") return;
        
        const newTask ={
          id:uuid(),
          text:input,
          completed: true,
        };

        setTasks([newTask, ...tasks]);
        setInput("");
      };
   
  const handleDelete = (id) =>{
    const newTasks = tasks.filter((task) =>task.id !==id);
setTasks(newTasks);
  };

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

    return(
<div className="relative h-screen
bg-blue-600 
flex 
justify-center 
items-center">

    <div className="max-w-xl w-full max-h-96 bg-white rounded-xl px-5 py-10">
        <form className="space-x-5 flex w-[30rem] mb-10"
        onSubmit={handleSubmit}
        >
            <input
             type="text" 
             className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
             onChange={(e) => setInput(e.target.value)}
            value={input}
            />
            <button type="submit" className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"
            disabled={input === ""}
            >
                Add</button>
        </form>

        <div className="space-y-2 overflow-y-scroll h-56">
           {tasks.map((task) =>(
            <TaskItem key={task.id} task={task} handleDelete={handleDelete}/>
            ))};
        </div>
        </div>
</div>
    );
};
export default TaskManager;