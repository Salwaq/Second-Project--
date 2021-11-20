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
      <section>
        <div>
          <input type="text" value={text} placeholder="search" />
        </div>
        o{/* nChange={e => onSearch(e.target.value)} */}
      </section>
    </>
  )
}

export default Search
