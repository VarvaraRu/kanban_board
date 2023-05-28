import './main.css'; 
import { Column } from '../column/column';

const tasksStatuses = [
    {number: 1, title: 'Backlog', status: 'Backlog'}, 
    {number: 2, title: 'Ready', status: 'Ready'}, 
    {number: 3, title: 'In progress', status: 'In progress'}, 
    {number: 4, title: 'Finished', status: 'Finished'}
]; 

export const Main = () => {

    return (
        <main className="main_part">
            {tasksStatuses.map((state)=> (
            <Column key={state.number} name={state.title} status={state.status}/>
          ))}  
        </main>
    )
}


