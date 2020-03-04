import React from "react"
import { Route } from "react-router-dom"
import Random from "./Random.js"
import Going from "./Going.js"
import NotGoing from "./NotGoing.js"

export default props => {
  return (
    <div>
      <Route exact path="/" component={Random}></Route>
      <Route exact path="/going" component={Going}></Route>
      <Route exact path="/notGoing" component={NotGoing}></Route>
    </div>
  )
}
