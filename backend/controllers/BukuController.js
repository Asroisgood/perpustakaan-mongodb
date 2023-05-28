import Buku from '../models/BukuModel.js'

export const getBuku = async (req, res) => {
  try {
    const data = await Buku.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getBukuById = async (req, res) => {
  try {
    const data = await Buku.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

export const saveBuku = async (req, res) => {
  const buku = new Buku(req.body)
  try {
    const insertedBuku = await buku.save()
    res.status(201).json(insertedBuku)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const updateBuku = async (req, res) => {
  try {
    const updatedBuku = await Buku.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.status(200).json(updatedBuku)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteBuku = async (req, res) => {
  try {
    const deletedBuku = await Buku.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedBuku)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
