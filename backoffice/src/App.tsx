import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GeneralLayout from './components/layouts/GeneralLayout'
import Dashboard from './screens/dashboard/Dashboard'

function App() {
  return (
    <div className='text-white-0 dark:bg-black-50 h-screen p-5'>
      <Router>
        <GeneralLayout title='Back Office'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </GeneralLayout>
      </Router>
    </div>
  )
}

export default App
