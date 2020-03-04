import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/random.css"

export default props => {
  const { declinedInv } = useRandom()

  return (
    <div className="notGoingWrapper">
      {declinedInv.map(user => (
        <div className="notGoingBox" key={"user" + user.id}>
          <div className="notGoingCenter">
            <img className="notGoingImg" alt="largePic" src={user.picture} />
          </div>
          <div className="notGoingDetails">
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
