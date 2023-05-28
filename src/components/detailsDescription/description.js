import './description.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const DetailsDescription = () => {
    
    const todos = useSelector(state => state.todos.todos); 

    return (
        <>
            <div className="wrapper_for_description">
                <div className='task_details_description'>
                    <button className='button_in_details'><Link to='/'><img src='/images/Group_3.svg'></img></Link></button>
                    <h1>текст</h1>
                    <p>дескрипшн</p>
                </div>
            </div>
        </>
    )
}