import { useNavigate } from 'react-router-dom';

const AllProductsButton = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/products')
	}

	return <button onClick={handleNavigate}>All products</button>;
};

export default AllProductsButton;
