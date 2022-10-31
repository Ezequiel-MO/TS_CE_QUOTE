import './App.css'
import GeneralLayout from './components/layouts/GeneralLayout'
import Dashboard from './screens/dashboard/Dashboard'

function App() {
  return (
    <div className='text-white-0 dark:bg-black-50 h-screen p-5'>
      <GeneralLayout title='Back Office'>
        <Dashboard />
      </GeneralLayout>
    </div>
  )
}

export default App
