import Book from '../models/BookModel.js'

export const getBook = async (req, res) => {
  try {
    const data = await Book.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getBookById = async (req, res) => {
  try {
    const data = await Book.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

export const saveBook = async (req, res) => {
  const newData = new Book(req.body)
  try {
    const insertedBook = await newData.save()
    res.status(201).json(insertedBook)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedBook)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
