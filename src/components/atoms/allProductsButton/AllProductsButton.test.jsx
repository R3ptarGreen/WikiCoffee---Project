import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import AllProductsButton from './AllProductsButton.jsx';
import { describe, test, expect, beforeEach, afterEach} from 'vitest';
import { HashRouter} from 'react-router-dom';

describe('AllMenuButton', () => {

	let button;
	beforeEach(() => {  
		render(
			<HashRouter>
				<AllProductsButton />
			</HashRouter>
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

    expect(window.location.hash).toBe('#/products')
	});
});
