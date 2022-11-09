import * as factory from '../services/factory'
import { Event } from '../models/event'

const getItem = factory.getOne(Event)
const getItems = factory.getAll(Event)
const updateItem = factory.updateOne(Event)
const postItem = factory.createOne(Event)
const deleteItem = factory.deleteOne(Event)

export { getItem, getItems, updateItem, postItem, deleteItem }
