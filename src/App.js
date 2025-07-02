import './App.css'
import ToDoListPage from './Pages/ToDoListPage'
import CountriesPage from './Pages/CountriesPage'
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/todolist" Component={ToDoListPage}/>
          <Route path="/countries" Component={CountriesPage}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
