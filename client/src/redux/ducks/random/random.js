import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_RANDOM = "random/GET_RANDOM"
const GET_GOING = "random/GET_GOING"

const initialState = {
  user: {},
  going: [],
  notGoing: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, user: action.payload }

    case GET_GOING:
      return { ...state, going: action.payload }

    default:
      return state
  }
}

function getRandom() {
  return dispatch => {
    axios.get("/api").then(resp => {
      const data = resp.data

      dispatch({
        type: GET_RANDOM,
        payload: data
      })
    })
  }
}

function addToGoing(user) {
  return dispatch => {
    axios.post("/api/going", { user }).then(resp => {
      dispatch(getRandom())
    })
  }
}

function addToDecline(user) {
  return dispatch => {
    axios.post("/api/notGoing", { user }).then(resp => {
      dispatch(getRandom())
    })
  }
}

function getGoing() {
  return dispatch => {
    axios.get("/api/going").then(resp => {
      console.log(resp.data)
      dispatch({
        type: GET_GOING,
        payload: resp.data
      })
    })
  }
}

export function useRandom() {
  const dispatch = useDispatch()
  const going = user => dispatch(addToGoing(user))
  const allGoing = () => dispatch(getGoing())
  const decline = user => dispatch(addToDecline(user))
  const random = useSelector(appState => appState.randomState.user)
  const accepted = useSelector(appState => appState.randomState.going)
  useEffect(() => {
    dispatch(getRandom())
  }, [dispatch])

  return { random, going, decline, allGoing, accepted }
}
