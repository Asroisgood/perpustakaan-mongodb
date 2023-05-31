import { BookList } from './components/BookList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="add" element={<AddBook />}></Route>
          <Route path="edit/:id" element={<EditBook />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
