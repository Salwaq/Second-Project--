import { useContext } from "react"
import { Form, Button, Container } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"

function Login() {
  const { login } = useContext(MarvilContext)
  return (
    <>
      <div className="backGlog">
        <Container className="formSign">
          <Form className="w-50 mx-auto " onSubmit={login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Button className="mb-3" variant="secondary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    </>
  )
}

export default Login
