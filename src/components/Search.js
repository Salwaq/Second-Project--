import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"

function Search() {
  const { characters, setCharacters, allCharacters } = useContext(MarvilContext)

  const searchCharacters = e => {
    const text = e.target.value
    if (text === "") return setCharacters(allCharacters)
    const characterList = characters.filter(character => character.name.toLowerCase().includes(text.toLowerCase()))
    setCharacters(characterList)
  }

  return (
    <>
      <div>
        <input type="search" placeholder="search" name="search" className="input-search" onChange={searchCharacters} />
      </div>
    </>
  )
}
export default Search
