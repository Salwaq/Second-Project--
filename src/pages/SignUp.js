import { useContext } from "react"
import { Form, Button, Container } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"

function SignUp() {
  const { signup } = useContext(MarvilContext)
  return (
    // <Fo
    <div className="backGlog">
      <Container className="formSign">
        <Form className="w-50 mx-auto " onSubmit={signup}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="First name" />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Last name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicimage">
            <Form.Label>image</Form.Label>
            <Form.Control type="url" name="photo" placeholder="image" />
          </Form.Group>

          <Button className="mb-3" variant="secondary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default SignUp
