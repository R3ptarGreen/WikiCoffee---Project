import './AllProductsButton.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../';

const AllProductsButton = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/products');
	};

	return (
		<button className='item' onClick={handleNavigate}>
			All products
			<Icon icon={'next'} />
		</button>
	);
};

export default AllProductsButton;
