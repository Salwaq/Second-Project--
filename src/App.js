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
  const [allCharacters, setAllCharacters] = useState([])
  const [characters, setCharacters] = useState([])
  const [comments, setComments] = useState([])
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  //------------------------------------------------------------------------------------------------------------------------
  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?ts=1636973485&apikey=9b9cf54874cc8c5b8eb24bc525ae83db&hash=ddf670078c808b7196fcaf311a30a136&limit=100"
      )

      // console.log("get finished")
      const result = response.data.data.results
      setAllCharacters(result)
      setCharacters(result)
      setLoading(false)
      // console.log(result)
    } catch (error) {
      console.log(error.result)
    }
  }
  //----------------------------------------------------------------------------------------------------------------------------

  const getComments = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/marvel-598/items")
      setComments(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error.data)
    }
  }

  useEffect(() => {
    getCharacters()
    getComments()

    if (localStorage.tokenCharacter !== undefined) {
      getProfile()
    }
  }, [])

  //---------------------------------------------------------------------------------------------------------------------------

  const addComment = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const userBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/marvel-598/items", userBody, {
        headers: {
          Authorization: localStorage.tokenCharacter,
        },
      })
      console.log("add success")
      getComments()

      navigate("/")
    } catch (error) {
      console.log(error?.response.data)
      alert(error.response.data)
    }
  }

  const deleteComment = async commentId => {
    await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/marvel-598/items/${commentId}`, {
      headers: {
        Authorization: localStorage.tokenCharacter,
      },
    })
    console.log("you deleted the product")
    getComments()
  }

  //confirm
  // ----------------------------------------------------------------------------------------------------------
  const confirmComment = async (e, commentId) => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
      }
      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/marvel-598/items/${commentId}`, userBody, {
        headers: {
          Authorization: localStorage.tokenCharacter,
        },
      })
      console.log(commentId)
      console.log("confirm success")
      getComments()
    } catch (error) {
      console.log(error?.response.data)
    }
  }
  //----------------------------------------------------------------------------------------------------------------

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
  //-----------------------------------------------------------------------------------------------------------------

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
  //-----------------------------------------------------------------------------------------------------------------------
  const logout = () => {
    localStorage.removeItem("tokenCharacter")
    navigate("/")
  }
  //-----------------------------------------------------------------------------------------------------------------------
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenCharacter,
        },
      })
      setProfile(response.data)
      console.log(response.data)
    } catch (error) {
      // console.log(error.response?.data)
    }
  }
  //-----------------------------------------------------------------------------------------------------------------------
  const store = {
    characters: characters,
    comments: comments,
    signup: signup,
    login: login,
    logout: logout,
    addComment: addComment,
    deleteComment: deleteComment,
    confirmComment: confirmComment,
    handleOpen: handleOpen,
    handleClose: handleClose,
    show: show,
    setCharacters: setCharacters,
    allCharacters: allCharacters,
    isLoading: isLoading,
    profile: profile,
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
