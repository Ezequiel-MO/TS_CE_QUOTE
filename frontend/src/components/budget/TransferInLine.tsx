import { useContext } from 'react'
import { BudgetContext } from './Budget'

const TransferInLine = () => {
  const { project } = useContext(BudgetContext)
  return (
    <tr>
      <td>{project?.date}</td>
      <td>Transfer In</td>
      <td>{project?.nrVehicles}</td>
      <td>{project?.transfer_in_service || 0}</td>
      <td>
        {project?.transfer_in_service && project?.nrVehicles
          ? project.transfer_in_service * project.nrVehicles
          : 0}
      </td>
    </tr>
  )
}

export default TransferInLine
