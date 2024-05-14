import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Todopage from './pages/todoPage';
import Addtodopage from './pages/addTodopage';
import EditTodopage from './pages/editTodopage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todopage />} />
          <Route path="/add/:id" element={<Addtodopage />} />
          <Route path="/edit/:id" element={<EditTodopage />} />
        </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
