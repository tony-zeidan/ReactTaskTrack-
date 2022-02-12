import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {

    const location = useLocation()

    return (
    <header className='header'>
        <h1>{props.title}</h1>
        {location.pathname === '/' && <Button text={props.showAddTask ? 'Close' : 'Add'} color={props.showAddTask ? 'red' : 'green'} onClick={props.onClick}/>}
    </header>
    )
}

Header.defaultProps = {
    title: 'Track your Tasks with TaskTrack+',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header