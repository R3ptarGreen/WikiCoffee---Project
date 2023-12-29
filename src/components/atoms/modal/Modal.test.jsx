import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import Modal from './Modal';

describe('<Modal/>', () => {

	let modal;
    let item;
	beforeEach(() => {
		render(<Modal />);
		modal = screen.getByRole('modal');
        item = screen.getByRole('item')
	});
	afterEach(() => {
		cleanup();
	});

	test('should render', () => {
		expect(modal).toBeDefined();
	});
	test('should contain a <div/> item with the description', () => {
        expect(modal).toContain(item)
    });
});
