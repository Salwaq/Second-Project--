import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"

function Login() {
  const { login } = useContext(MarvilContext)
  return (
    <form className="form-signup-login" onSubmit={login}>
      <div className="div-signup-login">
        <h2>Login</h2>
        <div className="form-signup-login-items">
          <label>Email:</label> <input name="email" type="email" placeholder="Enter your email" />
          <br />
          <label>Password</label> <input name="password" type="password" placeholder="Enter your password" />
          <br />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login
