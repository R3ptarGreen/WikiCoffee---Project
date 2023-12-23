import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import HeroItem from './HeroItem';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

describe('<HeroItem/>', () => {
	let title;
	let content;
	let prefer;
	let buttonHot;
	let buttonCold;
	beforeEach(() => {
		render(
			<HashRouter>
				<HeroItem />
			</HashRouter>,
		);
		title = screen.queryByText('WikiCoffee');
		content = screen.queryByText(/content/i);
		prefer = screen.queryByText(/prefer/i);
		buttonHot = screen.getByRole('hot');
		buttonCold = screen.getByRole('cold');
	});
	afterEach(() => {
		cleanup();
	});
	test('should render', () => {
		expect(content, prefer, buttonHot, buttonCold, title).toBeDefined();
	});
	test('should buttons redirect to hot pathname', () => {
		fireEvent.click(buttonHot);

		expect(window.location.hash).toBe('#/products/hot');
	});
	test('should buttons redirect to cold pathname', () => {
		fireEvent.click(buttonCold);

		expect(window.location.hash).toBe('#/products/cold');
	});
});
