import './notFound.css'
import { Link } from 'react-router-dom'

export const NotFoundComponent = () => {
    return (
            <div className="not_found">
                <p className='not_found_text'>Sorry, that page doesn't exist. Return to : <Link to='/'>home</Link></p>
            </div>
    )
}