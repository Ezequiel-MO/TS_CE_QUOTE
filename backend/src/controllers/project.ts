import * as factory from '../services/factory'
import Project from '../models/project'

const getItem = factory.getOne(Project)
const getItems = factory.getAll(Project)
const updateItem = factory.updateOne(Project)
const postItem = factory.createOne(Project)
const deleteItem = factory.deleteOne(Project)

export { getItem, getItems, updateItem, postItem, deleteItem }
