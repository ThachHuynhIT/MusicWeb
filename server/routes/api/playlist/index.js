const express = require("express");

const getPlayList = require("./getPlayList")
const deletePlayList = require("./deletePlayList")
const addSongToPlayList = require("./addSongToPlayList");
const deleteSongOfPlayList = require("./deleteSongOfPlayList");
const createPlayList = require("./createPlayList");

const router = express.Router();


router.get("/get-playlist/:userId", getPlayList);
router.delete("/get-playlist", deletePlayList);
router.put("/add-song-playlist/:playlistId/:songId", addSongToPlayList);
router.put("/delete-song-playlist/:playlistId/:songId", deleteSongOfPlayList);
router.post("/create-playlist/:userId/:name", createPlayList);


module.exports = router;
