import * as factory from '../services/factory'
import { Hotel } from '../models/hotel'

const getItem = factory.getOne(Hotel)
const getItems = factory.getAll(Hotel)
const updateItem = factory.updateOne(Hotel)
const postItem = factory.createOne(Hotel)
const deleteItem = factory.deleteOne(Hotel)

export { getItem, getItems, updateItem, postItem, deleteItem }
