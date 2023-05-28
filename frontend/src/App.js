import { BukuList } from './components/BukuList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBuku from './components/AddBuku'
import EditBuku from './components/EditBuku'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<BukuList />}></Route>
          <Route path="add" element={<AddBuku />}></Route>
          <Route path="edit/:id" element={<EditBuku />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
