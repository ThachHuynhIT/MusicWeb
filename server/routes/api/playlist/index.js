const express = require("express");

const getPlayList = require("./getPlayList");
const createPlayList = require("./createPlayList");
const deletePlayList = require("./deletePlayList");
const updatePlaylistImg = require("./createPlaylistImg");
const getSongPlayList = require("./getSongPlayList");
const addSongToPlayList = require("./addSongToPlayList");
const deleteSongOfPlayList = require("./deleteSongOfPlayList");

const router = express.Router();

router.get("/get-playlist/:userId", getPlayList);
router.post("/create-playlist/:userId", createPlayList);
router.delete("/delete-playlist/:playlistId", deletePlayList);
router.get("/get-song-playlist/:playlistId", getSongPlayList);
router.post("/update-playlist-img/:playlistId", updatePlaylistImg);
router.put("/add-song-playlist/:playlistId/:songId", addSongToPlayList);
router.put("/delete-song-playlist/:playlistId/:songId", deleteSongOfPlayList);

module.exports = router;
