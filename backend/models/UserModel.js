import mongoose from 'mongoose'

const schemaUser = mongoose.Schema({
  kode: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jenisKelamin: {
    type: String,
    enum: {
      values: ['laki-laki', 'perempuan'],
      message: 'Jenis kelamin {VALUE} berada diluar nalar!',
    },
    required: true,
  },
  contacts: {
    email: String,
    noHP: {
      type: String,
      required: true,
    },
  },
  roles: {
    code: Number,
    desc: String,
  },
})

export default mongoose.model('Users', schemaUser)
