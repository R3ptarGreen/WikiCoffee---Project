import { useEffect, useState } from 'react';
import { Icon } from '../../';
import {useProductContext} from '../../../hooks/useProductContext';

const ProductsNav = () => {
	const { productType, setProductType } = useProductContext();
	console.log('Context:', useProductContext());
	const [type, setType] = useState(productType);

	useEffect(() => {
		setType(productType)
	},[productType])

	const handleType = type => {
		setType(type);
		setProductType(type)
	};
	return (
		<nav>
			<div>
				<h2 role='title' className='text--homeTitle'>
					Products/{type}
				</h2>
			</div>
			<div>
				<Icon role={'coffee'} icon={'coffee'} />
				<Icon role={'ingredient'} icon={'ingredient'} />
			</div>
			<div>
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
		</nav>
	);
};

export default ProductsNav;
