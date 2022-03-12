const express = require("express");
const app = express();
const http = require("http");
const port = 443;

app.get("/", (req, res) => {
  res.status(403).json({ message: "Access unauthorized" });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
