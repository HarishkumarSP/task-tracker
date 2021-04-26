import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title,onAdd,showAdd }) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text = {showAdd ? 'Add' : 'Close'} color = {showAdd ? 'green' : 'red'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task tracker'
}

Header.prototype = {
    title : PropTypes.string
}


export default Header
