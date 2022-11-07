const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    deleteReaction
  } = require('../../controllers/thought-controller');
  
  router.route('/')
  .get(getAllThoughts)
  .post(addThought);

  router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

  router
   .route('/:thoughtId/reactions')
   .post(addReaction)
   .delete(deleteReaction);

   module.exports = router;