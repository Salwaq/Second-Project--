import { useContext } from "react"
import MarvilContext from "../utils/MarvilContext"
import Comment from "../components/Comment"

function Profile() {
  const { profile, comments } = useContext(MarvilContext)
  const myComment = comments.filter(comment => comment._user._id === profile._id)
  return (
    <>
      <div>
        <img src={profile.photo} alt="" />
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
        <p>{profile.email}</p>
      </div>

      <div>
        <h2>My comment:</h2>
        {myComment.map(comment => (
          <Comment comment={comment} inProfile={true} />
        ))}
      </div>
    </>
  )
}

export default Profile
