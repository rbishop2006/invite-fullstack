import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"

export default props => {
  const { accepted } = useRandom()

  return (
    <div className="">
      {/* {.map(accepted => ( */}
      <div>
        <div className="">
          <img className="" alt="largePic" src={accepted.picture} />
        </div>
        <div className="">
          <p>
            <span className="">Name:</span> {accepted.name}
          </p>
          <p>
            <span className="">Phone:</span> {accepted.phone}
          </p>
          <p>
            <span className="">Email:</span> {accepted.email}
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}
