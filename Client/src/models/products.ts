import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<Product> {
  return {
    data: data.items,
    total: data.total
  }
}
