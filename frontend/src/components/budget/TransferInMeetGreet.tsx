import { useContext } from 'react'
import { BudgetContext } from './Budget'

const TransferInMeetGreet = () => {
  const { project } = useContext(BudgetContext)
  return (
    <tr>
      <td>{project?.date}</td>
      <td>Meet & Greet</td>
      <td>{1}</td>
      <td>{project?.transfer_in_meetGreet || 0}</td>
      <td>
        {project?.transfer_in_meetGreet ? project.transfer_in_meetGreet * 1 : 0}
      </td>
    </tr>
  )
}

export default TransferInMeetGreet
