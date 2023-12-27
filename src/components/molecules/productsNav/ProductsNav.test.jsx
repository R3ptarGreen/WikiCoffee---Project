import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import ProductsNav from './ProductsNav';
import { ProductContextProvider } from '../../../context/ProductContext';

test('should change text when a button is clicked', () => {
	render(
		<ProductContextProvider>
			<ProductsNav />
		</ProductContextProvider>,
	);

	const title = screen.getByRole('title');
	const buttonAll = screen.getByRole('All');
	const buttonHot = screen.getByRole('hot');
	const buttonIced = screen.getByRole('iced');

	expect(title).toString('Products/All');

	fireEvent.click(buttonHot);
	expect(title).toString('Products/hot');

	fireEvent.click(buttonIced);
	expect(title).toString('Products/iced');

	fireEvent.click(buttonAll);
	expect(title).toString('Products/All');
});
