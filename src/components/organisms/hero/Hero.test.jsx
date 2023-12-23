import { cleanup, render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, test, expect, beforeEach, afterEach} from 'vitest';
import { HashRouter} from 'react-router-dom';

describe('AllMenuButton', () => {

	let component;
	beforeEach(() => {  
		render(
			<HashRouter>
				<Hero />
			</HashRouter>
		);
		component = screen.queryByRole('hero');
	});
	afterEach(() => {
		cleanup();
	});
	test('should render correctly', () => {
		expect(component).toBeDefined();
	});
});