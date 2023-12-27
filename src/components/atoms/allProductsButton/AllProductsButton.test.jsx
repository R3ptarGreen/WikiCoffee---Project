import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import AllProductsButton from './AllProductsButton.jsx';
import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { HashRouter } from 'react-router-dom';
import { ProductContextProvider } from '../../../context/ProductContext.jsx';

describe('AllMenuButton', () => {
	let button;
	beforeEach(() => {
		render(
			<HashRouter>
				<ProductContextProvider>
					<AllProductsButton />
				</ProductContextProvider>
			</HashRouter>,
		);
		button = screen.queryByText('All products');
	});
	afterEach(() => {
		cleanup();
	});
	test('should show on screen', () => {
		expect(button).toBeDefined();
	});
	test('should call onClick and redirec the page', () => {
		fireEvent.click(screen.getByRole('button'));

		expect(window.location.hash).toBe('#/products');
	});
});
