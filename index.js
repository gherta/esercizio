const express = require("express")
const app = new express()

const fetch = require('node-fetch');

const renderMenu = (currentPage) => {
  
    return `
      <ul>
        <li><a href="/" style="${currentPage === "home" ? selectedStyle : ""}">Home</a></li>
      </ul>
    `
  }



fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

app.get(" https://jsonplaceholder.typicode.com/posts", (req, res) => {
    res.send(renderHtml("home", "x"))
  })


app.listen(3000, () => console.log("server listening on port 3000"))