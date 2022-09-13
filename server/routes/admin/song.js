const express = require("express");
const router = express.Router();

const songsController = require("../../controllers/SongController");

router.get("/edit/:id", songsController.edit);
router.post("/store", songsController.store);
router.get("/bin", songsController.songBin);
router.get("/create", songsController.create);
router.post('/handle-form-action', songsController.handleFormAction)
router.get("/:slug", songsController.show);
router.put("/:id", songsController.update);
router.patch("/restore/:id", songsController.restore);
router.delete("/:id", songsController.destroy);
router.delete("/force/:id", songsController.forceDestroy);
router.get("/", songsController.index);

module.exports = router;