import { useEffect, useState } from 'react';
import { Icon } from '../../';
import {useProductContext} from '../../../hooks/useProductContext';
import  './ProductsNav.scss'
import useCoffeeAxios from '../../../hooks/useCoffeeAxios'
const ProductsNav = () => {
	const { productType, setProductType } = useProductContext();
	const [type, setType] = useState(productType);
	const [menuType, setMenuType] = useState(false);
	const { allData, hotData, icedData } = useCoffeeAxios();

	useEffect(() => {
		setType(productType)
	},[productType])
	
	const handleType = type => {
		setType(type);
		setProductType(type)
	};
	const handleMenu = () => {
		setMenuType(!menuType)
	}
	const selectedData =
		productType === 'hot'
			? hotData
			: productType === 'iced'
				? icedData
				: allData;
	return (
		<nav className='nav'>
			<div>
				<h2 role='title' className='nav__title text--homeTitle'>
					Products #{selectedData.length}/{type}
				</h2>	
			</div>
			<div className='nav__menuCoffee'>
				<Icon role={'coffee'} icon={'coffee'} onClick={handleMenu}/>
			{menuType && 
			<div role='menuType' className='nav__menuCoffeeItem'>
				{['All', 'hot', 'iced'].map(navType => (
					<button
					key={navType}
					onClick={() => handleType(navType)}
					role={navType}
					>
						{navType}
					</button>
				))}
			</div>
			}
			</div>
		</nav>
	);
};

export default ProductsNav;
