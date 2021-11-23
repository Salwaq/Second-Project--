import { useContext, useState } from "react"
import { Card, Button, Col, Image, Form, Modal } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"

function Comment(props) {
  const { comment, inProfile } = props
  const { confirmComment } = useContext(MarvilContext)
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  const { deleteComment } = useContext(MarvilContext)

  return (
    <div>
      <Card className="mb-2 mx-2 w-100" xs={6} md={4}>
        <Card.Header>
          <Col xs={6} md={4}>
            <Image src={comment._user.photo} height={50} roundedCircle />
          </Col>
          {comment._user.firstName} {comment._user.lastName}
        </Card.Header>
        <Card.Body>
          <Card.Title>{comment.title}</Card.Title>
          <Card.Text>{comment.description}</Card.Text>
        </Card.Body>
        <div className="mb-2 mx-2 ">
          {inProfile ? (
            <>
              <Button variant="outline-success" onClick={handleOpen}>
                Edit
              </Button>{" "}
              <></>
              <Button variant="outline-danger" onClick={() => deleteComment(comment._id)}>
                Delete
              </Button>
            </>
          ) : null}
        </div>
      </Card>

      {/* ---------------------------------------------------------------------- */}
      <>
        <Modal size="sm" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
          <Form onSubmit={e => confirmComment(e, comment._id)}>
            <Modal.Header closeButton></Modal.Header>
            <Card>
              <Card.Header>Edit Comment:</Card.Header>
              <Card.Body>
                <Card.Title>Character name</Card.Title>
                <Form.Control name="title" type="text" defaultValue={comment.title} />
                <Card.Text>Description </Card.Text>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  name="description"
                  defaultValue={comment.description}
                />
              </Card.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Card>
          </Form>
        </Modal>
      </>
    </div>
  )
}

export default Comment
