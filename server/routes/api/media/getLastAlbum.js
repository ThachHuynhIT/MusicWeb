const User = require("../../../models/User");
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const formData = req.body;
    formData.slug = slugify(formData.name, {
      remove: /[*+~.,()'"!:@]/g,
      lower: true,
      strict: true,
      locale: "vi",
    });
    //update course after adding image, slug
    User.updateOne({ _id: req.params.id },{lastAlbum: formData})
      .then()
      .catch(next);
};
