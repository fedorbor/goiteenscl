import { ToDo } from "./ToDo";
export function ToDoList({toDos}){
return(
<ul>
    {
        toDos.map((toDo)=>(
            <ToDo
            text={toDo.text}
            completed={toDo.completed}
            
            />
        ))

       
    }

</ul>
 )
}
