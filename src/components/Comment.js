import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import MarvilContext from "../utils/MarvilContext"
import EditModal from "./EditModal"
function Comment(props) {
  const { comment, inProfile } = props
  const { deleteComment, handleOpen } = useContext(MarvilContext)

  return (
    <div className="comment">
      <Card className="mb-2 mx-2 w-100">
        <Card.Header>
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
      <EditModal commentId={comment._id} comment={comment} />
    </div>
  )
}

export default Comment
