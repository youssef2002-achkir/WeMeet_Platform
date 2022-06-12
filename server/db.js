const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Wemeet_DB')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDb;