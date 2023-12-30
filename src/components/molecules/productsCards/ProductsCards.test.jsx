import { afterEach, beforeEach, describe, test } from 'vitest';
import ProductsCards from './ProductsCards';
import { cleanup, render} from '@testing-library/react';
import { ProductContextProvider } from '../../../context/ProductContext';
describe('<ProductsCards/>', () => {
	beforeEach(() => {
		render(
			<ProductContextProvider>
				<ProductsCards />
			</ProductContextProvider>,
		);
	});
    afterEach(() => {
        cleanup()
    })
	test('should render', () => {
	});
});
