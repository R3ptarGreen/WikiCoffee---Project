import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { Home, Products } from '../components/index';
const AppRouter = () => {
	const routes = createHashRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{ path: '/', element: <Home /> },
				{
					path: '/products/',
					element: <Products />,
					children: [
						{ path: 'hot' },
						{ path: 'cold' },
					],
				},
			],
		},
	]);
	return <RouterProvider router={routes} />;
};

export default AppRouter;
