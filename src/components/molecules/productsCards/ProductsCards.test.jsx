import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import ProductsCards from './ProductsCards';
import { cleanup, render, screen } from '@testing-library/react';
import { ProductContextProvider } from '../../../context/ProductContext';
describe('<ProductsCards/>', () => {
	let card;
	beforeEach(() => {
		render(
			<ProductContextProvider>
				<ProductsCards />
			</ProductContextProvider>,
		);
		card = screen.getByRole('cards');
	});
    afterEach(() => {
        cleanup()
    })
	test('should render', () => {
		expect(card).toBeTruthy();
	});
});
