const express = require("express");
const getSongLegion = require("./getSongLegion");

const getSongType = require("./getSongType");
const getSongAlbum = require("./getAlbumSong");
const searchSong = require("./searchSongName");
const getAlbum = require("./getAlbum");

const router = express.Router();

router.get("/get-album", getAlbum);
router.get("/searchSong", searchSong);
router.get("/song-type/:type/:page", getSongType);
router.get("/song-album/:name/:page", getSongAlbum);
router.get("/song-legion/:legion/:page", getSongLegion);

module.exports = router;
