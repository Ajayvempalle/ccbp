// Write your JS code here
import {withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'

const LogoutButton = props => {
  const logoutButtonClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={logoutButtonClicked}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
