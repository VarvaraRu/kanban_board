import './task.css';
import {RemoveBtn} from './vectors_in_tasks/Group 3'

export const Task = () => {

    return (
        <div className='task'>
            <div className='task_description'></div>
            <button className='remove_btn'><RemoveBtn/></button>
        </div>
    )
}
