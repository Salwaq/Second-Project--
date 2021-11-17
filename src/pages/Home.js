import { useContext } from "react"
import Carditem from "../components/Carditem"
import MarvilContext from "../utils/MarvilContext"

import { Container, Row } from "react-bootstrap"

function Home() {
  const { characters } = useContext(MarvilContext)
  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4">
          {characters.map(character => (
            <Carditem character={character} key={character.id} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home
