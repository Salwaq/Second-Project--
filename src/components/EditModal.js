import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"
import { Card, Button, Modal, Form } from "react-bootstrap"
function EditModal(props) {
  const { comment } = props
  const { confirmComment, show, handleClose } = useContext(MarvilContext)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => confirmComment(e, comment._id)}>
          <Modal.Header closeButton></Modal.Header>
          <Card>
            <Card.Header>Edit Comment:</Card.Header>
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <input name="title" type="text" defaultValue={comment.title} />
              <Card.Text>Description </Card.Text>
              <textarea type="textarea" rows="5" name="description" defaultValue={comment.description} />
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
  )
}

export default EditModal
