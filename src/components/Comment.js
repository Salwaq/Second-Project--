import { useContext, useState } from "react"
import { Card, Button, Modal, Row, Form } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"
import EditModal from "./EditModal"
function Comment(props) {
  const { comment } = props
  const { deleteComment, handleOpen } = useContext(MarvilContext)

  return (
    <div>
      <Card className="mb-2 mx-2">
        <Card.Header>Comment:</Card.Header>
        <Card.Body>
          <Card.Title>{comment.title}</Card.Title>
          <Card.Text>{comment.description}</Card.Text>
        </Card.Body>
        <div className="mb-2 mx-2 ">
          {localStorage.tokenCharacter !== undefined ? (
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
      <EditModal comment={comment} />
    </div>
  )
}

export default Comment
