import mongoose from 'mongoose'

const schemaBuku = mongoose.Schema({
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

export default mongoose.model('Buku', schemaBuku)
