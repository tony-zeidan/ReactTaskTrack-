import PropTypes from 'prop-types'

function defaultOnClick() {
    console.log('Button clicked')
}

const Button = (props) => {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color }} className='btn'>{props.text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    onClick: defaultOnClick,
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button