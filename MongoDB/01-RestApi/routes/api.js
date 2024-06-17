const express = require("express");
const router = express.Router();

const { handleGetApi, handleCreateUser } = require("../controllers/api");
const {
  verifyId,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/api_ID");

router.route("/").get(handleGetApi).post(handleCreateUser);

router
  .route("/:id")
  .all(verifyId)
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
