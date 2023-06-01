import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BookList = () => {
  const [book, setBook] = useState([])

  useEffect(() => {
    getBook()
  }, [])

  const getBook = async () => {
    const response = await axios.get('http://localhost:5000/book')
    setBook(response.data)
  }

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/book/${id}`)
      getBook()
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      <div className="columns">
        <div className="column is-one-third">
          <h1 className="title">Tabel Buku</h1>
        </div>
        <div className="column">
          <Link to="add" className="button is-success">
            Tambah Data
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <table className="table is-striped is-narrow is-hoverable is-fullwidth is-capitalized">
            <thead>
              <tr>
                <th>#</th>
                <th>Kode Buku</th>
                <th>Judul Buku</th>
                <th>Pengarang</th>
                <th>Penerbit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {book.map((data, i) => (
                <tr key={data._id}>
                  <td>{++i}</td>
                  <td>{data.kode}</td>
                  <td>{data.judul}</td>
                  <td>{data.pengarang}</td>
                  <td>{data.penerbit}</td>
                  <td>
                    <Link
                      to={`edit/${data._id}`}
                      className="button is-info is-small"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBook(data._id)}
                      className="button is-danger is-small"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default BookList
