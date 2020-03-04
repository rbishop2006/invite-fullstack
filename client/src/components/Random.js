import React from "react"
import { useRandom } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/random.css"

export default props => {
  const { random, going, decline, allGoing, accepted } = useRandom()
  return (
    <div className="randomWrapper">
      <div className="goingNotGoing">
        <p className="randomGoing">Going: </p>
        <p className="randomNotGoing">Not Going:</p>
      </div>
      <div className="randomBox">
        <div className="randomImgContainer">
          <img className="randomImg" alt="largePic" src={random.picture} />
        </div>
        <div className="randomDetails">
          <p>
            <span className="bold">Name:</span> {random.name}
          </p>
          <p>
            <span className="bold">Phone:</span> {random.phone}
          </p>
          <p>
            <span className="bold">Email:</span> {random.email}
          </p>
        </div>
      </div>
      <div className="randomButtons">
        <button className="randomNo" onClick={e => decline(random)}>
          N
        </button>
        <button className="randomYes" onClick={e => going(random)}>
          Y
        </button>
      </div>
      <div>
        <Link to={"/going"}>
          <button onClick={e => allGoing()}>Who's Going?</button>
        </Link>
      </div>
    </div>
  )
}
