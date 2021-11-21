import { Button, Modal, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import MarvilContext from "../utils/MarvilContext"
function Carditem(props) {
  const [smShow, setSmShow] = useState(false)
  const { character } = props
  const { addComment } = useContext(MarvilContext)
  // console.log(character.id)

  return (
    <>
      <div className="content">
        <div className="content-inner">
          <div className="content-front">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} height={200} />

            {/* {character.image.extension} */}
            {/* {character.thumbnail.path + ".jpg"} */}
            {/* {" "}{character.thumbnail.extension} */}
            {/* + "portrait_xlarge.jpg" */}
            {/* .{character.thumbnail.extension} */}
          </div>
          <div className="content-back">
            <h1>{character.name}</h1>
            <ul>
              <li>{character.name}</li>
              <li>{character.description}</li>

              <li>
                <button id={character.id}></button>
              </li>
            </ul>
            <Button onClick={() => setSmShow(true)}>Add comment</Button>{" "}
            <>
              <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Form onSubmit={addComment}>
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">Add Comment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {" "}
                    <input type="text" name="title" />
                  </Modal.Body>
                  <Modal.Body>
                    <input type="textarea" name="description" />
                  </Modal.Body>
                  <button type="submit">Add</button>
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
