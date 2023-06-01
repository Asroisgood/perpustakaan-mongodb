import User from '../models/UserModel.js'

export const getUser = async (req, res) => {
  try {
    const data = await User.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const saveUser = async (req, res) => {
  try {
    const data = new User(req.body)
    const insertedUser = await data.save()
    res.json(insertedUser)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const data = await User.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const updatedData = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.status(200).json(updatedData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deletedData = await User.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
