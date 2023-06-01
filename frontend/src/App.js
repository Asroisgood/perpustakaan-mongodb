import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import BookList from './components/BookList'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'

import UserList from './components/UserList'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="add" element={<AddBook />}></Route>
          <Route path="edit/:id" element={<EditBook />}></Route>

          <Route path="/user" element={<UserList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
