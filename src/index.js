const express = require("express");
const cors = require("cors");
const path = require("path");
const recipes = require("./recipes");

const server = express();

server.use(cors());

const port = 5000;
server.listen(port, () => {
  console.log("server is runing on http://localhost:" + port);
});

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

server.use("/images", express.static(path.join(__dirname, "images")));

server.get("/api/recipes", (req, res) => {
  if (recipes.length === 0) {
    res.json({
      status: "error",
      result: [],
    });
  } else {
    res.json({
      status: "success",
      result: recipes,
    });
  }
});
