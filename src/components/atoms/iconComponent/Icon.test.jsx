import { cleanup, render, screen } from '@testing-library/react';
import Icon from './Icon';
import { describe, test, expect, beforeEach, afterEach} from 'vitest';

describe('AllMenuButton', () => {

	let icon;
	beforeEach(() => {  
		render(
			<Icon/>
		);
		icon = screen.getByRole('img');
	});
	afterEach(() => {
		cleanup();
	});
	test('should render the component', () => {
		expect(icon).toBeTruthy();
	});
});