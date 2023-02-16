const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
    username: {
       type: String,
       unique: true,
       required: true,
       trimmed: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email address.',
          ],
    },
    // thoughts: {
    //     type: [_id],
    //     ref: "Thoughts"
    // }, 

    // friends: {
    //     type: [_id],
    //     ref: "User",

    // },
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);
  userSchema
    .virtual('friendCount')
      .get(function () {
        return `${friends.length}`;
      }
);

const User = model('user', userSchema);
module.exports = User;