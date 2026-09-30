import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Weather from './pages/Weather'
import TodoApp from './pages/TodoApp'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <h2 className="logo">My Portfolio</h2>
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/todo">To-Do</NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Products />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </main>
    </>
  )
}

export default App