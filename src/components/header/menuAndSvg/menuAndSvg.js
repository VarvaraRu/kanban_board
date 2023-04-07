import './menuAndSvg.css'; 
import { useState } from 'react';
import {VectorDown} from './vectors/Vector_down'; 
import {VectorUp} from './vectors/Vector_up'; 

export const Menu = () => {

    const [open, setOpen] = useState(false); 

        return (
            <div className='menu_wrapper'>
                <div className="menu_trigger" onClick={() => {setOpen(!open)}}>
                    <button className='btn_in_header'>
                        <img className="avatar" src="./images/user-avatar.png" alt='avatar'/>
                        <div className='vector'>
                            {open ? (
                                <VectorUp/>
                                ) : (
                                    <VectorDown/>
                                    )
                            }
                        </div>
                    </button>
                </div>

                <div className={`dropdown_menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <li className='menu_item'><a href='#'>Profile</a></li>
                        <li className='menu_item'><a href='#'>Log Out</a></li>
                    </ul>
                </div>
            </div>
        )
}