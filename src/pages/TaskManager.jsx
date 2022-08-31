import React, { useEffect, useState } from 'react'
import { v4 as uuid } from "uuid";
import TaskItem from '../components/TaskItem';
import { useTaskContext } from '../context/taskContext';


const TaskManager = () => {

const {tasks, setValue} = useTaskContext();
 const [input, setInput] = useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();
  if (input ==="") return;

  const newTask = {
   id : uuid(),
   text : input,
   completed : false,
  };

 
  setValue([newTask, ...tasks])
  setInput("");


}
const handleCompleted = (id) => {
  const newTasks =tasks.map((task) =>{
    if (task.id ===id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });
  setValue(newTasks);

};
const handleEdit =(id)=>{
  const newTasks = tasks.filter((task)=>{
    if (task.id === id) {
    setInput(task.text);
    return false;
    } 
    return task;
  });
}
const handleDelete = (id) => {
  const newTasks = tasks.filter((task) => task.id !== id);
  setValue(newTasks);
};

useEffect(()=>{
  localStorage.setItem("task",JSON.stringify(tasks))

},[tasks]);

  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className="max-w-xl bg-white rounded-xl py-10 px-5 max-h-96">
        <form className="space-x-5 flex w-[30rem] mb-10" onSubmit={handleSubmit}>
         <input type="text" className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
         onChange={(e)=>setInput(e.target.value)}
         value={input}
         />
         <button type="submit"  className="bg-blue-600 px-7 py-2 text-white text-lg rounded-md">Add</button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
        {tasks.map((task)=> <TaskItem
         key={task.id} 
         task={task} 
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
          />
          )}
        </div>
      </div>  
    </div>
  );
}

export default TaskManager;


