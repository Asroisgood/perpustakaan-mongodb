import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserList = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const { data } = await axios.get('http://localhost:5000/user')
    setUser(data)
  }

  return (
    <>
      <div className="columns">
        <div className="column is-one-third">
          <h1 className="title">Tabel User</h1>
        </div>
        <div className="column has-text-left">
          <button className="button is-primary">Tambah User</button>
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <table className="table is-striped is-narrow is-hoverable is-fullwidth is-capitalized">
            <thead>
              <tr>
                <td>#</td>
                <td>Kode</td>
                <td>Nama</td>
                <td>Jenis Kelamin</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {user.map((data, i) => (
                <tr key={data._id}>
                  <td>{++i}</td>
                  <td>{data.kode}</td>
                  <td>{data.nama}</td>
                  <td>{data.jenisKelamin}</td>
                  <td>
                    <button className="button is-info is-small has-text-weight-bold">
                      info
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

export default UserList
