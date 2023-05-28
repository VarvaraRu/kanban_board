import { useState } from 'react';
import './buttonAddCard.css'; 
import { InputOrSelect } from '../inputAndSelectInCard/inputOrSelect';

export const Button = (props) => {

    const [active, setActive] = useState(false); 

    return (
        
        <div className='wrapper'>
            {active ? (
                <InputOrSelect 
                    status={props.status}/>
            ) : (
                <></>
            )
            }
            <button type='button' className='button_in_card' onClick={() => {setActive(!active)}}>+ Add card</button>
        </div>
        )
}
