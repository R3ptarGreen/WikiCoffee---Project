import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import ProductsNav from './ProductsNav';

describe('<ProducstNav/>', () => {
	let title;
	let buttonHot;
	let buttonCold;
	let buttonAll;
	beforeEach(() => {
		render(<ProductsNav />);
		title = screen.getByRole('title');
		buttonHot = screen.getByRole('hot');
		buttonCold = screen.getByRole('iced');
		buttonAll = screen.getByRole('all');
	});
	afterEach(() => {
		cleanup();
	});
	test('should render', () => {
		expect(title).toBeTruthy();
	});
	test('should change text when the icon is clicked', () => {
		fireEvent.click(buttonAll);
		expect(title).toString('Products/All');

		fireEvent.click(buttonHot);
		expect(title).toString('Products/Hot');

		fireEvent.click(buttonCold);
		expect(title).toString('Products/Iced');
	});
});
