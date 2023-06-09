import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [kode, setKode] = useState('')
  const [judul, setJudul] = useState('')
  const [pengarang, setPengarang] = useState('')
  const [penerbit, setPenerbit] = useState('')
  const navigate = useNavigate()

  const saveBook = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/book', {
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
      <div className="column is-half box is-fullwidth">
        <form onSubmit={saveBook}>
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
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button type="submit" className="button is-success">
                Simpan
              </button>
            </div>
            <div className="control">
              <a href="/" className="button is-light">
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook
