import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"
import EditModal from "./EditModal"
function Comment(props) {
  const { comment, inProfile } = props
  const { deleteComment, handleOpen } = useContext(MarvilContext)

  return (
    <div>
      <Card className="mb-2 mx-2 w-100">
        <Card.Header>Comment:</Card.Header>
        <Card.Body>
          <Card.Title>{comment.title}</Card.Title>
          <Card.Text>{comment.description}</Card.Text>
        </Card.Body>
        <div className="mb-2 mx-2 ">
          {inProfile ? (
            <>
              <Button variant="outline-success" id={comment._id} onClick={handleOpen}>
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
      <EditModal comment={comment} commentId={comment._id} />
    </div>
  )
}

export default Comment
