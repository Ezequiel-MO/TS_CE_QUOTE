import { services } from './dashboard_data'
import ServiceCard from './ServiceCard'

const Solutions = () => {
  return (
    <div className='flex items-start'>
      {services.map((item) => {
        return (
          <div key={item.title}>
            <ServiceCard
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Solutions
