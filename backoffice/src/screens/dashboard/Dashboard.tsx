import Sidebar from './Sidebar'
import Solutions from './Solutions'

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      Initial Backoffice Dashboard
      <div className='flex flex-row p-5'>
        <Sidebar />
        <Solutions />
      </div>
    </div>
  )
}

export default Dashboard
