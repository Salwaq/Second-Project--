import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"
import Comment from "../components/Comment"

function Profile() {
  const { profile, comments } = useContext(MarvilContext)
  console.log(profile)
  if (!profile) {
    return <h1>Loading ..</h1>
  }
  const myComment = comments.filter(comment => comment._user._id === profile._id)

  return (
    <div className="profile">
      <div className="infoProfile">
        <img src={profile.photo} height={200} alt="" />
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
        <p>{profile.email}</p>
      </div>
      <h2>My comment:</h2>
      <div className=" cardProfile">
        {myComment.map(comment => (
          <Comment comment={comment} id={comment._id} inProfile={true} />
        ))}
      </div>
    </div>
  )
}

export default Profile
