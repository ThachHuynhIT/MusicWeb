const express = require("express");

const getPlayList = require("./getPlayList");
const addSongToPlayList = require("./addSongToPlayList");
const createPlayList = require("./createPlayList");

const router = express.Router();

router.get("/get-playlist", getPlayList);
router.put("/add-song-playlist/:playlistId/:songId", addSongToPlayList);
router.post("/create-playlist/:userId", createPlayList);

module.exports = router;
