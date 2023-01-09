import mongoose from "mongoose";

const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    movie: {
      type: String,
      require: true,
    },

    singer: {
      type: String,
      require: true,
    },

    song: {
      type: String,
      require: true,
    },

    img: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Music", musicSchema);
