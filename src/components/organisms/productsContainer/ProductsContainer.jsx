import { useState } from 'react';
import {ProductsNav, ProductsCards, Modal} from '../..';
import {useProductContext} from '../../../hooks/useProductContext'
import './ProductsContainer.scss';
const ProductsContainer = () => {
  const {modalInfo} = useProductContext();
  const [openModal, setOpenModal] = useState(false)
  
  const handleModal = () => {
    setTimeout(() => {
      setOpenModal(!openModal)
    }, 50)
  }

  return (
    <div role="container" className='container'>
      {openModal && (Array(modalInfo).map((item, index) => (
          <Modal
          key={index} 
          img={item.img}
          title={item.title}
          description={item.description}
          ingredients={item.ingredients}
          handleModal={handleModal}
          />
          ))
        )}
        <ProductsNav/>
        <ProductsCards activeModal={handleModal}/>
    </div>
  )
}

export default ProductsContainer