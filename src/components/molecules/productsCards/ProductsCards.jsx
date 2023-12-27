import './ProductsCards.scss';
import useCoffeeAxios from '../../../hooks/useCoffeeAxios';
import { useProductContext } from '../../../hooks/useProductContext';
const ProductsCards = () => {
	const { productType } = useProductContext();
	const { allData, hotData, icedData } = useCoffeeAxios();

	const selectedData =
		productType === 'hot'
			? hotData
			: productType === 'iced'
				? icedData
				: allData;

	return (
		<div role='cards' className='cards'>
			{selectedData.map((item, index) => (
				<div className='cards__card' key={index}>
					<img loading='lazy' className='cards__img' src={item.image}/>
					<div className='cards__item'>
						<h2 className=''>{item.title}</h2>
						<ul>
							<li className=''>{item.ingredients}</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductsCards;
