const express = require("express")
const router = express.Router()
const axios = require("axios")

let users = []
let userId = 0
let going = []
let notGoing = []

router.get("/", (req, res, next) => {
  axios.get("https://randomuser.me/api").then(resp => {
    const obj = resp.data.results[0]
    const user = {
      picture: obj.picture.large,
      name: `${obj.name.first} ${obj.name.last}`,
      phone: obj.cell,
      email: obj.email
    }

    userId++
    users.push({ ...user, id: userId })
    res.json({
      ...user,
      id: userId
    })
  })
})

router.post("/going", (req, res, next) => {
  going.push(req.body.user)
  res.json({
    ...going
  })
  console.log(going)
})

router.get("/going", (req, res, next) => {
  res.json({ going })
})

router.post("/notGoing", (req, res, next) => {
  notGoing.push(req.body.user)
  res.json({
    ...notGoing
  })
  console.log(notGoing)
})

router.get("/notGoing", (req, res, next) => {
  res.json({ notGoing })
})

module.exports = router
