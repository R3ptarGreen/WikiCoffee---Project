import { useState } from 'react';
import {ProductsNav, ProductsCards, Modal} from '../..';
import {useProductContext} from '../../../hooks/useProductContext'

const ProductsContainer = () => {
  const {modalInfo} = useProductContext();
  const [openModal, setOpenModal] = useState(false)
  
  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div role="container">
      {openModal && (Array(modalInfo).map((item, index) => (
          <Modal
          role='modal'
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
        <ProductsCards testid={'card'} activeModal={handleModal}/>
    </div>
  )
}

export default ProductsContainer