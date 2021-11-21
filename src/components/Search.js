import { useContext, useState } from "react"
import MarvilContext from "../utils/MarvilContext"

function Search({ search }) {
  //   const [text, setText] = useState("")
  // const [searchField, setSearchField] = useState("")
  const { characters } = useContext(MarvilContext)

  //   const onSearch = q => {
  //     setText(q)
  //     search(q)
  //   }

  // const searchCharacters = characters.filter(
  //   character => character.name.toLowerCase().includes(character.name.toLowerCase()) === value
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
