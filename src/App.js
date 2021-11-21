import axios from "axios"
import { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import MarvilContext from "./utils/MarvilContext"
import Apps from "./App.css"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
function App() {
  const [characters, setCharacters] = useState([])
  // const [marvels, setMarvels] = useState([])
  const navigate = useNavigate()
  // const [searchCharacters, setSearchCharacters] = useState("")
  // const [searchParam] = useState(["name"])

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?ts=1636973485&apikey=9b9cf54874cc8c5b8eb24bc525ae83db&hash=ddf670078c808b7196fcaf311a30a136&limit=100"
      )

      console.log("get finished")
      const result = response.data.data.results
      setCharacters(result)
      // setSearchCharacters(result)
      console.log(result)
    } catch (error) {
      console.log(error.result)
    }
  }

  // const getMarvels = async () => {
  //   try {
  //     const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/marvel-598/items")
  //     setMarvels(response.data)
  //   } catch (error) {
  //     console.log(error.data)
  //   }
  // }
  useEffect(() => {
    getCharacters()
    // getMarvels()
  }, [])

  const signup = async e => {
    e.preventDefault()
    const form = e.target

    const userBody = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      photo: form.elements.photo.value,
    }
    try {
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const login = async e => {
    e.preventDefault()

    const form = e.target

    const userBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    try {
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const tokenCharacter = response.data
      localStorage.tokenCharacter = tokenCharacter

      // getMarvels()
      navigate("/")
      getCharacters()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenCharacter")
    navigate("/")
  }

  const store = {
    characters: characters,
    signup: signup,
    login: login,
    logout: logout,
    // searchCharacters: searchCharacters,

    // searchParam: searchParam,
  }

  return (
    <div className="App">
      <MarvilContext.Provider value={store}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MarvilContext.Provider>
    </div>
  )
}

export default App
