import {Card} from '../cards/card';
import { InputOrSelect } from '../inputAndSelectInCard/inputOrSelect';
import './column.css'

export const Column = (props) => {

    return (
        <div className="column">
            <div className='title'>{props.name}</div>
             <Card/>
        </div>
    )
}