import PropTypes from 'prop-types'

function UserGreeting(props){
    
    let message = props.isLoggedIn 
        ? `Welcome ${props.username}`
        : "Please log in to continue"

    let className = props.isLoggedIn
        ? `welcome-message`
        : "login-prompt"
    
    return <h2 className={className}>{message}</h2>
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
    

export default UserGreeting