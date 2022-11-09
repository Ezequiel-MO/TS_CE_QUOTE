import * as factory from '../services/factory'
import { Location } from '../models/location'

const getItem = factory.getOne(Location)
const getItems = factory.getAll(Location)
const updateItem = factory.updateOne(Location)
const postItem = factory.createOne(Location)
const deleteItem = factory.deleteOne(Location)

export { getItem, getItems, updateItem, postItem, deleteItem }
