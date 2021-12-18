const { Router } = require("express");
const { getConnection } = require("../utils/db.js");
const getStats = Router();
getStats.get("/stats", (req, res) => {
  try {
    const getAllDocuments = getConnection().get("dnas").value();
    const getDnasWithouthMutations = getAllDocuments.filter(
      (data) => data.isMutation === false
    ).length;
    const getDnasWithMutations = getAllDocuments.filter(
      (data) => data.isMutation === true
    ).length;
    let ratio = getDnasWithMutations / getDnasWithouthMutations;
    if (isNaN(ratio)) ratio = 0;
    res.status(200).json({
      count_mutations: getDnasWithMutations,
      count_no_mutation: getDnasWithouthMutations,
      ratio: ratio.toFixed(1),
    });
  } catch (e) {
    res.status(500).json({ message: "Error de servidor" });
  }
});
module.exports = getStats;
