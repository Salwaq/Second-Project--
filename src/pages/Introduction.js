import { useContext } from "react"
import Carditem from "../components/Carditem"
import MarvilContext from "../utils/MarvilContext"
import Comment from "../components/Comment"
import { Container, Row, Spinner } from "react-bootstrap"
import Logo from "../components/Logo"

import Search from "../components/Search"

function Introduction() {
  const { characters, comments, isLoading } = useContext(MarvilContext)
  let newCharacters = characters.filter(
    character => character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  )
  console.log(newCharacters)
  return (
    <>
      <Logo />
      <Search />
      <Container>
        {isLoading ? (
          <Spinner className="spinner" animation="border" variant="danger" size="lg" />
        ) : (
          <Row xs={1} sm={2} md={4} className="g-4">
            {newCharacters.map(character => (
              <Carditem character={character} key={character.id} />
            ))}
          </Row>
        )}
      </Container>

      <h1 className="titleComment">Comments :</h1>
      <Row xs={1} sm={2} md={4} className="g-4">
        {comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </Row>
    </>
  )
}
export default Introduction
