import{list} from 'postcss';
import React,{useState} from"react";
import TaskItem from "./TaskItem";



function TaskManager(){
    const[tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input ==="") return;
        setTasks([input, ...tasks]);
        setInput("");
      };
   
  const handleDelete = (index) =>{
    const newTasks = tasks.filter((task) =>task!==index);
setTasks(newTasks);
  }
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
            <TaskItem task={task} handleDelete={handleDelete}/>
            ))}
        </div>
        </div>
</div>
    );
}
export default TaskManager;