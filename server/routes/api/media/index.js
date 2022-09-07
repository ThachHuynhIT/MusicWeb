const express = require("express");
const getSongLegion = require("./getSongLegion");

const getSongType = require("./getSongType")
const getAlbumSong = require("./getAlbumSong")
const postLastAlbum = require("./postLastAlbum")
const searchName = require("./searchName")
const getLastMusic = require("./getLastMusic")
const getAlbum = require("./getAlbum")


const router = express.Router();

router.get("/get-album/:type/:page", getAlbum);
router.get("/searchSong", searchName);
router.post("/post-last-album/:userId/:albumName/:songId", postLastAlbum);
router.get("/song-type/:type/:page", getSongType);
router.get("/song-album/:name/:page", getAlbumSong);
router.get("/get-last-music", getLastMusic);
router.get("/song-legion/:legion/:page", getSongLegion);

module.exports = router;
