import { useContext } from 'react'
import {ProductContext} from '../context/ProductContext'

const useProductContext = () => {
    const context = useContext(ProductContext)
  return context
}

export {useProductContext}