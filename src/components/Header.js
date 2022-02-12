import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button text={props.showAddTask ? 'Close' : 'Add'} color={props.showAddTask ? 'red' : 'green'} onClick={props.onClick}/>
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