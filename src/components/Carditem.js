import { Col, Card } from "react-bootstrap"
function Carditem(props) {
  const { character } = props

  // const image ={character.thumbnail.path}
  return (
    <>
      <Col>
        <Card>
          <Card.Img src={character.thumbnail.path + ".jpg"} />
          {/* {character.image.extension} */}
          {/* {character.thumbnail.path + "jpg"} */}
          {/* {" "}{character.thumbnail.extension} */}
          {/* + "portrait_xlarge.jpg" */}
          {/* .{character.thumbnail.extension} */}

          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>{character.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Carditem
