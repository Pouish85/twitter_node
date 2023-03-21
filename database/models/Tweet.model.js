const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema(
    {
        content: {
            type: String,
            maxlength: [146, "Le tweet est trop long !"],
            minlength: [5, "Le tweet est trop court !"],
            required: [true, "Le contenu ne peut être vide."],
        },
        author: {
            type: schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        comments: {
            type: [schema.Types.ObjectId],
            ref: "comment",
        },
        nbLikes: {
            type: Number,
            default: 0,
        },
        retweeted: {
            status: { type: Boolean, default: false },
            initialAuthor: {
                type: schema.Types.ObjectId,
                ref: "user",
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
