const router = require('express').Router();
 
 const {
    
    createReactions,
    deleteReactions,
    
  } = require('../../controllers/reactionsController');
  


// /api/thoughts/:thoughtsId/reactions/:reactionsId
router.route('/:thoughtsId/reactions').post(createReactions);
router.route('/:thoughtsId/reactions/:reactionsId').delete(deleteReactions);

module.exports = router;