const express = require("express");
const app = express();

const port = 3001;

app.get("/node", (req, res) => {
  res.json({ message: "O node está funcionando" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
