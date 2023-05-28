import {Card} from '../cards/card';
import './column.css'

export const Column = (props) => {

    return (
        <div className="column">
            <div className='title'>{props.name}</div>
             <Card 
             status={props.status}
             />
        </div>
    )
}