import {BrowserRouter,Routes, Route} from 'react-router-dom';
import todopage from './pages/todoPage';
import Addtodopage from './pages/addTodopage';
import editTodopage from './pages/editTodopage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<todopage />} />
          <Route path="/add" element={<Addtodopage />} />
          <Route path="/edit" element={<editTodopage />} />
        </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
