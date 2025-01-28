import './App.css'
import './Responsive.css'
import { TodoList } from './components/TodoList'
// import { Routes, BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<TodoList />} ></Route>
        </Routes>
      </Router> */}
      <TodoList />
    </>
  )
}

export default App
