const express = require("express");
const router = express.Router();

const albumsController = require("../app/controllers/AlbumController");

router.get("/edit/:id", albumsController.edit);
router.post("/store", albumsController.store);
router.get("/bin", albumsController.albumBin);
router.get("/create", albumsController.create);
router.get("/:slug", albumsController.show);
router.put("/:id", albumsController.update);
router.patch("/restore/:id", albumsController.restore);
router.delete("/:id", albumsController.destroy);
router.delete("/force/:id", albumsController.forceDestroy);
router.get("/", albumsController.index);

module.exports = router;