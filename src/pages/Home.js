import { useContext } from "react"
import Carditem from "../components/Carditem"
import MarvilContext from "../utils/MarvilContext"

import { Container, Row } from "react-bootstrap"
import Logo from "../components/Logo"

// import Search from "../components/Search"

function Home() {
  const { characters } = useContext(MarvilContext)
  let newCharacters = characters.filter(
    character => character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  )
  console.log(newCharacters)
  return (
    <>
      <Logo />
      <Search />
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4">
          {newCharacters.map(character => (
            <Carditem character={character} key={character.id} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home
