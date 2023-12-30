import { cleanup, render, screen} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import ProductsContainer from './ProductsContainer';
import { ProductContextProvider } from '../../../context/ProductContext';

describe('<ProductsContainer', () => {
	beforeEach(() => {
		render(
			<ProductContextProvider>
				<ProductsContainer />
			</ProductContextProvider>,
		);
	})
	afterEach(() => {
		cleanup()
	})
	test('should render', () => {
		const container = screen.getByRole('container');
		expect(container).toBeTruthy();
	});
	test('should not show modal in the start', async() => { 
		expect(screen.queryByRole('modal')).toBeFalsy()
	 })
	
});
