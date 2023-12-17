import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {Home} from '../components/index'
const AppRouter = () => {
	const routes = createHashRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{path: '/', element:<Home/>}
			]
		},
	]);
	return <RouterProvider router={routes} />;
};

export default AppRouter;
