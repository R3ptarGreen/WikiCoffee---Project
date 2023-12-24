import { useState } from 'react'
import {Icon} from '../../'

const ProductsNav = () => {
    const [type, setType] = useState('Products/All')

    const handleTypeAll = () => {
        setType('Products/All')
    }
    const handleTypeHot = () => {
        setType('Products/Hot')
    }
    const handleTypeCold = () => {
        setType('Products/Iced')
    }

	return (
		<nav>
			<div>
				<h2 role='title' className='text--homeTitle'>{type}</h2>
			</div>
			<div>
				<Icon role={'coffee'} icon={'coffee'} />
				<Icon role={'ingredient'} icon={'ingredient'} />
			</div>
			<div>
                <button onClick={handleTypeAll} role='all'>All</button>
				<button onClick={handleTypeHot} role='hot'>hot</button>
				<button onClick={handleTypeCold} role='iced'>cold</button>
			</div>
		</nav>
	);
};

export default ProductsNav;
