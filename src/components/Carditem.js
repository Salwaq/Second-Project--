import { Link } from "react-router-dom"
function Carditem(props) {
  const { character } = props

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
          </div>
        </div>
      </div>
    </>
  )
}

export default Carditem
