import { useContext, useState } from "react"
import MarvilContext from "../utils/MarvilContext"
function Search() {
  const { searchCharacters, characters } = useContext(MarvilContext)
  // const [searchField, setSearchField] = useState("")
  // const { characters } = useContext(MarvilContext)
  // let searchCharacters = characters.filter(character =>
  //   character.name.toLowerCase().includes(searchField.toLowerCase())
  // )
  // console.log(searchCharacters)

  return (
    <>
      <div>
        <input type="search" placeholder="search" className="input-search" />
      </div>
    </>
  )
}
export default Search
