import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"

function SignUp() {
  const { signup } = useContext(MarvilContext)
  return (
    <form className="form-signup-login" onSubmit={signup}>
      <div className="div-signup-login">
        <h2>Signup</h2>
        <div className="form-signup-login-items">
          <label>First Name:</label> <input name="firstName" type="text" placeholder="Enter your first Name" />
          <br />
          <label>Last Name:</label> <input name="lastName" type="text" placeholder="Enter your Last Name" />
          <br />
          <label>Email:</label> <input name="email" type="email" placeholder="Enter your email" />
          <br />
          <label>Password:</label> <input name="password" type="password" placeholder="Enter your password" />
          <br />
          <label>Photo:</label> <input name="photo" type="url" placeholder="Enter the photo link" />
          <br />
        </div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUp
