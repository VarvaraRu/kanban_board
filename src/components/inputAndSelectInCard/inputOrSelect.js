import './inputOrSelect.css';
// import Select from 'react-select';
import { useState } from 'react';
import {useDispatch} from 'react-redux'; 
import {addNewTask} from '../../store/todoSlice.js';
import { onChangeStatusTask } from '../../store/todoSlice.js';
import { useSelector } from 'react-redux';

export const InputOrSelect = (props) => {
    
    const todos = useSelector(state => state.todos.todos); 

    const dispath = useDispatch(); 
    const addTask = () => dispath(addNewTask(text));
   

    const [text, setText] = useState();


    // const [selectedTaskId, setSelectedTaskId] = useState('');
    // const [tasks, setTasks] = useState(todos)

    // const handleTaskChange = (e) => {
    //     const selectedId = e.target.value;
    //     setSelectedTaskId(selectedId);
    //     handleChangeStatus(selectedId, props.status)
    // };

    // const handleChangeStatus = (taskId, newStatus) => {

    //     const updatedTasks = tasks.map((task) => {          

    //     if (task.id == taskId) {
    //         return { ...task, status : newStatus };
    //     }
    //     return task;
    //     });
    //     setTasks(updatedTasks);
    //     console.log(updatedTasks)
    //     console.log(todos)
    // };


    const changeStatus = () => dispath(onChangeStatusTask(selectedTaskId));
    const [selectedTaskId, setSelectedTaskId] = useState('');
    
    const handleTaskChange = (e) => {
        const selectedId = e.target.value
        setSelectedTaskId(selectedId);
        changeStatus(selectedTaskId)
        // console.log(e.target.value)
        console.log(selectedTaskId)
        console.log(selectedId)

        // console.log('it also works')
    };

    return (
        <div className='wrapper'>
            {props.status === 'Backlog' ? (
                <>
                    <input className='inputForNewTask' placeholder='What needs to be done?' value={text} onChange={(e) => setText(e.target.value)} ></input>
                    <button className="buttonSbmt" onClick={addTask}>Submit</button>
                </>
            ) : (
                <div>
                    <select value={selectedTaskId} onChange={handleTaskChange}>
                        <option value="">что переносим?</option>
                        {todos.map((task) => (
                            <option key={task.id} value={task.id} id={task.id} status={task.status}>{task.text}</option>
                        ))}
                    </select>
                </div>

            )
            }   
        </div>
            
    )
}
