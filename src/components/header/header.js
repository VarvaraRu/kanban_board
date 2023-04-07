import './header.css'; 
import {Menu} from './menuAndSvg/menuAndSvg'; 

export const Header = () => {
    return (
        <header className="header">
            <p className='title_in_header'>Awesome kanban board</p>
                <Menu/>
        </header>
    )
}