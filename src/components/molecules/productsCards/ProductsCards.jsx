import './ProductsCards.scss';
import useCoffeeAxios from '../../../hooks/useCoffeeAxios';
import { useProductContext } from '../../../hooks/useProductContext';
import PropTypes from 'prop-types';

const ProductsCards = ({activeModal}) => {
	const { productType, setModalInfo } = useProductContext();
	const { allData, hotData, icedData } = useCoffeeAxios();

	const selectedData =
		productType === 'hot'
			? hotData
			: productType === 'iced'
				? icedData
				: allData;

	const handleModal = (item) => {
		const modalProp =
			{
				"img" : item.image,
				"title" : item.title,
				"description" : item.description, 
				"ingredients" : item.ingredients
			};
		setModalInfo(modalProp);
		activeModal();
	}
	return (
		<div role='card' className='cards' >
			{selectedData.map((item, index) => (
				<div role='cardImg' className='cards__card' key={index} onClick={() => handleModal(item)} >
					<figure className='cards__imgContainer'>
						<img loading='lazy' className='cards__img' src={item.image} />
					</figure>
					<div className='cards__item'>
						<h2 className='text--title'>{item.title}</h2>
						<ul className='cards__itemInfo'>
							{item.ingredients.map((item, index) => (
								<li className='cards__itemInfoList' key={index}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};
ProductsCards.propTypes = {
	activeModal: PropTypes.func
}
export default ProductsCards;
