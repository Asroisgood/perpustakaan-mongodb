import mongoose from 'mongoose'

const schemaBook = mongoose.Schema({
  kode: {
    type: String,
    required: true,
  },
  judul: {
    type: String,
    required: true,
  },
  pengarang: {
    type: String,
    required: true,
  },
  penerbit: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Books', schemaBook)
