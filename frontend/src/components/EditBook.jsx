import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const [kode, setKode] = useState('')
  const [judul, setJudul] = useState('')
  const [pengarang, setPengarang] = useState('')
  const [penerbit, setPenerbit] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getBookById()
  }, [])

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/book/${id}`)
    setKode(response.data.kode)
    setJudul(response.data.judul)
    setPengarang(response.data.pengarang)
    setPenerbit(response.data.penerbit)
  }

  const updateBook = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/book/${id}`, {
        kode,
        judul,
        pengarang,
        penerbit,
      })
      navigate('/')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateBook}>
          <div className="field">
            <label className="label">Kode Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kode}
                onChange={(e) => setKode(e.target.value)}
                placeholder="Kode Buku"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Judul Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul Buku"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pengarang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
                placeholder="Pengarang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penerbit</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
                placeholder="Penerbit"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBook
