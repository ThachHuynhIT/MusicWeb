const express = require("express");
const getSongLegion = require("./getSongLegion");

const getSongType = require("./getSongType");
const getAlbumSong = require("./getAlbumSong");
const postLastAlbum = require("./postLastAlbum");
const searchName = require("./searchName");
const getLastMusic = require("./getLastMusic");
const getAlbum = require("./getAlbum");
const getAlbumType = require("./getAlbumType");

const router = express.Router();

router.get("/get-album/:type/:page", getAlbumType);
router.get("/get-album/:page", getAlbum);
router.get("/searchSong", searchName);
router.post("/post-last-album/:userId", postLastAlbum);
router.get("/song-type/:type/:page", getSongType);
router.get("/song-album/:name/:page", getAlbumSong);
router.get("/get-last-music/:userId", getLastMusic);
router.get("/song-legion/:legion/:page", getSongLegion);

module.exports = router;
