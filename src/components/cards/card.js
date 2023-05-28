import './card.css'; 
import { Task } from '../tasks/task';
import { Button } from '../buttons/buttonAddCard'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';

export const Card = (props) => {
  
  const todos = useSelector(state => state.todos.todos); 

    return (
  
      <div className='card'>
        <Scrollbars autoHeight autoHeightMax={550}>
          {todos
          .filter((task) => task.status === props.status)
          .map((task) => 
          <Task key={task.id} title={task.text} status={task.status} description={task.description}/>
          )}
        </Scrollbars>
        <Button 
          status={props.status}
        />
        </div>

    )
}