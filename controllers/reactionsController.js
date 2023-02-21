const { Reactions, User,  } = require('../models');

module.exports = {
    // Create a reaction
  createReactions(req, res) {
    Reactions.create(req.body)
      .then((reactions) => res.json(reactions))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      })},

      // Delete a reaction
  deleteReactions(req, res) {
    Reactions.findOneAndDelete({ _id: req.params.reactionsId })
      .then((reactions) =>
        !reactions
          ? res.status(404).json({ message: 'No reaction with that ID' })
          : User.deleteMany({ _id: { $in: thoughts.user } })
      )
      .then(() => res.json({ message: 'Thought and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
    };
