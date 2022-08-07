const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://ZoneNop:UJpQKbiXW6aq2fU5@musicweb.vrcp1i7.mongodb.net/?retryWrites=true"
    );

    console.log("Connect successfully !");
  } catch (error) {
    console.log("Connect failure !");
  }
}

module.exports = { connect };
