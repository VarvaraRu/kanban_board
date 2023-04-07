import { useState } from 'react';
import './inputOrSelect.css';
import { ButtonSubmit } from '../buttons/buttonSubmitTask';

export const InputOrSelect = (props) => {

    // const [shown, setShown] = useState(false);

    return (
        <div className='wrapper'>
            <input className='inputForNewTask' placeholder='What needs to be done?'></input>
            <ButtonSubmit/>
            {props.state == 'Backlog' ? (
                // <input className='inputForNewTask' placeholder='What needs to be done?'></input>
                console.log ("yes")
            ) : (
                // <select>
                //     <option>test1</option>
                //     <option>test2</option>
                // </select>
                console.log ("no")
            )
            }   
        </div>
            
    )
}


// {(isNewTaskInputShown || isNewTaskSelectShown) &&
//     <button onClick={() => {
//         if (props.state === 'backlog') {
//             setIsNewTaskInputShown(false)
//             addTask(inputCardName);
//             setInputCardName(undefined);
//         } else {
//             setIsNewTaskSelectShown(false);
//             moveTask(selectedTaskId, props.state);
//         }
//     }}
//     >Submit</button>
//     }
//     {(isNewTaskInputShown || isNewTaskSelectShown)
//     && <button onClick={() =>
//         props.state = 'backlog'
//             ? setIsNewTaskInputShown(false)
//             : setIsNewTaskSelectShown(false)
//     }> Hide</button>}