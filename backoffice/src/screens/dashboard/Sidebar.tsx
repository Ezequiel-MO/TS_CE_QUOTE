import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { dbMaster } from './dashboard_data'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside className='min-w-fit mr-2'>
      <ul className='indent-6 text-white-100 bg-black-100 h-fit rounded'>
        {dbMaster.map(({ title, route, icon }) => {
          return (
            <li
              key={title}
              className='font-bold text-white-50 hover:text-orange-50 border-3 border-b last:border-none border-gray-100 p-2 flex items-center cursor-pointer'
              onClick={() => navigate(`/app/${route}`)}
            >
              <Icon icon={icon} />
              <p className='ml-2'>{title}</p>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
