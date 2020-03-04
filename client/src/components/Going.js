import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/random.css"

export default props => {
  const { accepted } = useRandom()

  return (
    <div className="goingWrapper">
      {accepted.map(user => (
        <div className="goingBox" key={"user" + user.id}>
          <div className="goingCenter">
            <img className="goingImg" alt="largePic" src={user.picture} />
          </div>
          <div className="goingDetails">
            <p>
              <span className="bold">Name:</span> {user.name}
            </p>
            <p>
              <span className="bold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="bold">Email:</span> {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
