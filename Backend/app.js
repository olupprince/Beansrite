const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("./api", (req, res) => {
  res.json({ message: "Listening from server!" });
});

app.listen(PORT, () => {
  console.log("Server Listening on ${PORT}");
});
