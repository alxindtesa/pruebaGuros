const express = require("express");
const cors = require("cors");
const { createConnection } = require("./src/utils/db");
const { getStats, pushMutations } = require("./src/routes");
const app = express();
createConnection();
app.use(cors());
app.use(express.json());
app.use(pushMutations, getStats);
app.listen(process.env.PORT || 4500, () => {
  console.log("Running");
});
