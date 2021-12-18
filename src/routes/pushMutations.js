const { Router } = require("express");
const { nanoid } = require("nanoid");
const { getConnection } = require("../utils/db.js");
const hasMutation = require("../utils/hasMutation.js");
const pushMutations = Router();
pushMutations.post("/mutation", (req, res) => {
  try {
    const { dna } = req.body;
    if (!dna) res.status(400).json({ message: "Datos no validos" });
    const verifyMutation = hasMutation(dna);
    if (verifyMutation === undefined)
      res.status(400).json({ message: "Datos no validos" });
    if (verifyMutation === false) {
      getConnection()
        .get("dnas")
        .push({
          id: nanoid(),
          isMutation: verifyMutation,
          dna,
        })
        .write();
      res.status(403).json({ message: "Adn sin mutacion" });
    } else {
      getConnection()
        .get("dnas")
        .push({
          id: nanoid(),
          isMutation: verifyMutation,
          dna,
        })
        .write();
      res.status(200).json({ message: "Adn con mutacion" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error de servidor" });
  }
});
module.exports = pushMutations;
