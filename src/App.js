import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Staircase from './pages/Staircase';
import Employee from './pages/employee/Employee';

export const BASE_URL = "https://gorest.co.in/public/v1"
export const AUTH_TOKEN = "ff204d63332ec73ee6b9256320e985acae910bb57263977debf581bfd96b3169"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Staircase />} />
          <Route path='/employee' element={<Employee />} />
        </Route>
      </Routes>
      
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav className='App-header'>
        <Link to="/">Staircase</Link> |{" "}
        <Link to="/employee">Employee</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;
