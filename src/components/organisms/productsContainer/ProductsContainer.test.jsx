import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ProductsContainer from './ProductsContainer';
import { ProductContextProvider } from '../../../context/ProductContext';

describe('<ProductsContainer', () => {
	test('should render', () => {
		render(
			<ProductContextProvider>
				<ProductsContainer />
			</ProductContextProvider>,
		);
		const container = screen.getByRole('container');
		expect(container).toBeTruthy();
	});
});
