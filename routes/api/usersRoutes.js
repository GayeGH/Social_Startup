const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,


} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/
//router.route('/:userId/assignments').post(addAssignment);

// /api/users/:userId/assignments/:assignmentId
//router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
