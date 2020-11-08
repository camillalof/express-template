import express from "express"

const app = express()

app.get('/', (req, res) => res.send("Hello world"))

app.get('/users', (req, res) => {
  res.json([
  { name: "Alice" },
  { name: "Lilly" },
  { name: "Liv" }
  ])
})

app.listen(3000, () => console.log("Port is working"))