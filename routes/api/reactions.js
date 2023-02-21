const router = require('express').Router();
 
 const {
    
    createReactions,
    deleteReactions,
    
} = require('../../controllers/reactionsController');
  

// /api/users/:reactionsId
router.route('/:reactionsId').get(getSingleReactions).delete(deleteReactions).put(updateReactions);

module.exports = router;