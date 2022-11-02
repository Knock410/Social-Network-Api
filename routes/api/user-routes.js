const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/Users-controller');
  
//Set up GET all and Post at /api/social-network

router
router
.route('/')
.get(getAllUsers)
.post(createUser));

// Set up GET one, PUT, and DELETE at /api/Userss/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;