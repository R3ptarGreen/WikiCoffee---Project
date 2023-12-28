import { useEffect, useState } from 'react';
import { Icon } from '../../';
import {useProductContext} from '../../../hooks/useProductContext';
import  './ProductsNav.scss'

const ProductsNav = () => {
	const { productType, setProductType } = useProductContext();
	const [type, setType] = useState(productType);
	const [menuType, setMenuType] = useState(false);

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
	return (
		<nav>
			<div>
				<h2 role='title' className='text--homeTitle'>
					Products/{type}
				</h2>	
			</div>
			<div>
				<Icon role={'coffee'} icon={'coffee'} onClick={handleMenu}/>
				<Icon role={'ingredient'} icon={'ingredient'} />
			</div>
			{menuType && 
			<div role='menuType'>
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
		</nav>
	);
};

export default ProductsNav;
