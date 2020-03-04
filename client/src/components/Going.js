import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { accepted } = useRandom()

  return (
    <div className="">
      {accepted.map(user => (
        <div key={"user" + user.id}>
          <div className="">
            <img className="" alt="largePic" src={user.picture} />
          </div>
          <div className="">
            <p>
              <span className="">Name:</span> {user.name}
            </p>
            <p>
              <span className="">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="">Email:</span> {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
