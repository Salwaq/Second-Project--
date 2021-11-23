import { Button, Modal, Form } from "react-bootstrap"
import { useContext, useState } from "react"
import MarvilContext from "../utils/MarvilContext"
function Carditem(props) {
  const [show, setShow] = useState(false)
  const { character } = props
  const { addComment } = useContext(MarvilContext)
  // console.log(character.id)

  return (
    <>
      <div className="content">
        <div className="content-inner">
          <div className="content-front">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} height={200} alt="" />
          </div>
          <div className="content-back">
            <h1>{character.name}</h1>
            <ul>
              <li>{character.name}</li>
              <li>{character.description}</li>
            </ul>
            <Button variant="outline-dark" onClick={() => setShow(true)}>
              Add comment
            </Button>{" "}
            {/* ------------------------------------------------------------------------------------------- */}
            <>
              <Modal show={show} onHide={() => setShow(false)} className="modal-90w ">
                <Form onSubmit={addComment}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Comment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {" "}
                    <Form.Control type="text" name="title" placeholder="Tybe character name" />
                  </Modal.Body>
                  <Modal.Body>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      name="description"
                    />
                  </Modal.Body>
                  <Button size="lg" className="mx-3 my-3" variant="dark" type="submit" onClick={() => setShow(false)}>
                    Add
                  </Button>
                </Form>{" "}
              </Modal>
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carditem
