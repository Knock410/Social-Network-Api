const router = require("express").Router();
const {
  
  createFriend,
  
  deleteFriend,
} = require("../../controllers/Friend-controller");

// /api/Friends
router
  .route("/")

  .post(createFriend);

// /api/Friends/:id
router
  .route("/:id")

  .delete(deleteFriend);

module.exports = router;
