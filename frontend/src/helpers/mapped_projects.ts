import { IProject, IMappedProject } from '../interfaces/project.interfaces'

export const map_project = (project: IProject): IMappedProject => {
  const { _id, code, nrPax, schedule } = project
  const { transfer_in, date } = schedule[0]
  const {
    transfer_in: transfer_in_service,
    meetGreet: transfer_in_meetGreet,
    assistance: transfer_in_assistance
  } = transfer_in[0]

  return {
    _id,
    code,
    nrPax,
    date,
    nrVehicles: transfer_in.length,
    transfer_in_service,
    transfer_in_meetGreet,
    transfer_in_assistance
  }
}
