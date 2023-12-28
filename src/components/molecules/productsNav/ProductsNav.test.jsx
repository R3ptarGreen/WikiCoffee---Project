import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ProductContextProvider } from '../../../context/ProductContext';
import { test, expect, describe, beforeEach, afterEach } from 'vitest';
import ProductsNav from './ProductsNav';

describe('<ProductsNav', () => {
	beforeEach(() => {
		render(
			<ProductContextProvider>
				<ProductsNav />
			</ProductContextProvider>,
		);
	});
	afterEach(() => {
		cleanup();
	});
	
	test('should change visibility of "typeMenu" when is clicked', async () => {
		
		expect(screen.queryByRole('menuType')).toBeFalsy();

		fireEvent.click(screen.getByRole('coffee'));

		const menuType = await screen.findByRole('menuType');

	  	expect(menuType).toBeTruthy();
  });
});