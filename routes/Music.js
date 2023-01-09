import express from "express";
import Music from "../models/music.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newMusic = new Music({
      title: req.body.title,
      movie: req.body.movie,
      singer: req.body.singer,
      song: req.body.song,
      img: req.body.img,
    });
    const music = await newMusic.save();
    res.status(200).json(music);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const musicById = await Music.findById(req.params.id);
    res.status(200).json(musicById);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateMusic = await Music.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateMusic);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  if (req.body.musicId === req.params.id) {
    try {
      await Music.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (err) {
      console.log(err);
    }
  }
});

export default router;
