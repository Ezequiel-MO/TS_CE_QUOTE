import { Icon } from '@iconify/react'

type ServiceCardProps = {
  title: string
  icon: string
  description: string | undefined
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className='flex flex-col items-start bg-gray-600 p-5 lg:w-64 cursor-pointer m-1 h-[180px]'>
      <div className='flex items-center'>
        <Icon icon={props.icon} width='30' />
        <div className='text-lg ml-2'>{props.title}</div>
      </div>
      <div>
        <p className='italic text-sm mt-2 hover:underline hover:text-blue-300'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
