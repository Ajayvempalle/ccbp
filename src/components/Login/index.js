// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setCookieAndHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickSubmit = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookieAndHome(data.jwt_token)
    }
  }

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <h1>please login</h1>
      <button type="button" onClick={onClickSubmit}>
        Login
      </button>
    </div>
  )
}

export default withRouter(Login)
