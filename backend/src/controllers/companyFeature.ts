import * as factory from '../services/factory'
import { CompanyFeature } from '../models/companyFeature'

const getItem = factory.getOne(CompanyFeature)
const getItems = factory.getAll(CompanyFeature)
const updateItem = factory.updateOne(CompanyFeature)
const postItem = factory.createOne(CompanyFeature)
const deleteItem = factory.deleteOne(CompanyFeature)

export { getItem, getItems, updateItem, postItem, deleteItem }
