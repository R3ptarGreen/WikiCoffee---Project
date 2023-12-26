import {createContext, useState} from 'react'
import PropTypes from 'prop-types'

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [productType, setProductType] = useState()

    const contextValue = {
        productType,
        setProductType
    }   
    return (
        <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
    )
}
ProductContext.propTypes = {
    children: PropTypes.node
} 