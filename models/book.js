const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , bookSchema = new Schema({title: String, author: String, published_date: {type: Date, default: Date.now}
})
module.exports = mongoose.model('book', bookSchema)