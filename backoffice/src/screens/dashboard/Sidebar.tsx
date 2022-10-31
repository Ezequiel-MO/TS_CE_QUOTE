import { services } from './dashboard_data'

const Sidebar = () => {
  return (
    <div className='flex flex-col overflow-y-auto bg-gray-50 rounded p-5 mx-5'>
      {services.map((item) => {
        return <span key={item.title}>{item.title}</span>
      })}
    </div>
  )
}

export default Sidebar
