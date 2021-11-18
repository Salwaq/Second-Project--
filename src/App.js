import axios from "axios"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
// import Search from "./components/Search"
import Navbar from "./components/Navbar"

import MarvilContext from "./utils/MarvilContext"
import style from "./App.css"

function App() {
  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?ts=1636973485&apikey=9b9cf54874cc8c5b8eb24bc525ae83db&hash=ddf670078c808b7196fcaf311a30a136&limit=100"
      )

      console.log("get finished")
      const result = response.data.data.results
      setCharacters(result)
      console.log(result)
    } catch (error) {
      console.log(error.result)
    }
  }
  useEffect(() => {
    getCharacters()
  }, [])
  const store = {
    characters: characters,
  }

  return (
    <div className="App">
      <MarvilContext.Provider value={store}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MarvilContext.Provider>
    </div>
  )
}

export default App
