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
              <Modal show={show} onHide={() => setShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                <Form onSubmit={addComment}>
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">Add Comment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {" "}
                    <input type="text" name="title" placeholder="Tybe character name" />
                  </Modal.Body>
                  <Modal.Body>
                    <textarea type="textarea" rows="5" name="description" />
                  </Modal.Body>
                  <Button variant="dark" type="submit" onClick={() => setShow(false)}>
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
