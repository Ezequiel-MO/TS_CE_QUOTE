import { useEffect, useState } from 'react'
import { baseAPI } from '../configs/axiosConfig'
import { map_project } from '../helpers/mapped_projects'
import { IMappedProject } from '../interfaces/project.interfaces'

export const useFetchCurrentProject = (code: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentProject, setCurrentProject] = useState<IMappedProject>()

  const fetchCurrentProject = async (code: string, controller: any) => {
    setIsLoading(true)
    try {
      const response = await baseAPI.get(`v1/projects?code=${code}`, {
        signal: controller.signal
      })
      const projectMapped = map_project(response.data.data.data[0])
      setCurrentProject(projectMapped)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchCurrentProject(code, controller)
    return () => {
      controller.abort()
    }
  }, [code])

  return {
    isLoading,
    currentProject
  }
}
