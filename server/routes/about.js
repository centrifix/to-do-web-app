const express = require("express"); // import express lib
const router = express.Router(); // create router module

let aboutInfo = [
    {id: 1, title: "Contact", info: "Put your contact here"},
    {id: 2, title:"Mission", info: "Put mission here or link to mission page"},
    {id: 3, title: "Documentation", info: "Put link to readme here"},
]

router.get("/", (req, res) => {
  res.json(aboutInfo);
});

module.exports = router;