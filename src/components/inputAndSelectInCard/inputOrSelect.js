import './inputOrSelect.css';
import Select from 'react-select';
import { useState } from 'react';
import {useDispatch} from 'react-redux'; 
import {addNewTask} from '../../store/todoSlice.js';
// import { onChangeStatusTask } from '../../store/todoSlice.js';
import { useSelector } from 'react-redux';

export const InputOrSelect = (props) => {
    
    const todos = useSelector(state => state.todos.todos); 

    const dispath = useDispatch(); 
    const addTask = () => dispath(addNewTask(text));
    // const changeStatus = () => dispath(onChangeStatusTask());

    const [text, setText] = useState('');
    const [task, setTask] = useState(todos);

    const onChangeStatusTask = (task) => {
        setTask(
            todos.map(
                task => {
                    if (task.status !== props.status) {
                        todos.find(task => task.id === task.id ? {...task, status: props.status} : task)
                    }
                    }
            )
        )
        console.log (task.id)
        console.log (task.status)
        console.log (props.status)
    }

    return (
        <div className='wrapper'>
            {props.status === 'Backlog' ? (
                <>
                    <input className='inputForNewTask' placeholder='What needs to be done?' value={text} onChange={(e) => setText(e.target.value)} ></input>
                    <button className="buttonSbmt" onClick={addTask}>Submit</button>
                </>
            ) : (

                <Select className='select_in_card'  options={todos} onChange={onChangeStatusTask}/>
            )
            }   
        </div>
            
    )
}