import './main.css'; 
import { Column } from '../column/column';

const tasksStatuses = [
    {id: 1, title: 'Backlog', status: 'Backlog'}, 
    {id: 2, title: 'Ready', status: 'Ready'}, 
    {id: 3, title: 'In progress', status: 'In progress'}, 
    {id: 4, title: 'Finished', status: 'Finished'}
]; 

export const Main = (props) => {

    return (
        <main className="main_part">
            {tasksStatuses.map((state)=> (
            <Column key={state.id} name={state.title} status={state.status}/>
          ))}  
        </main>
    )
}


