import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { Home, Modal, Products, ProductsTemplate } from '../components/index';
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
				{path: '/test', element: <Modal/>}
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
