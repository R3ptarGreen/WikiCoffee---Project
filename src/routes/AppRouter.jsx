import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { Home, Products, ProductsTemplate } from '../components/index';
import {ProductContextProvider} from '../context/ProductContext'
const AppRouter = () => { 
	const routes = createHashRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{ path: '/', element: <Home /> },
				{
					path: '/products',
					element: <Products />,
					children: [{ path: '', element: <ProductsTemplate /> }],
				},
			],
		},
	]);
	return (
		<ProductContextProvider>
			<RouterProvider router={routes} />
		</ProductContextProvider>
	);
};

export default AppRouter;
