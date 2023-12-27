import './AllProductsButton.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../';
import {useProductContext} from '../../../hooks/useProductContext'

const AllProductsButton = () => {
	const {setProductType} = useProductContext()
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/products');
		setProductType('All')
	};

	return (
		<button className='item' onClick={handleNavigate}>
			All products
			<Icon icon={'next'} />
		</button>
	);
};

export default AllProductsButton;
