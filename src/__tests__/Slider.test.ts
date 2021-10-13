/**
 * @jest-environment jsdom
 */

import Slider from '$lib/Slider.svelte';
import { render } from '@testing-library/svelte';

test('Slider is on page', () => {
    const slider = render(Slider);
	const steps = slider.getByTestId('choose-steps');
	expect (steps).toHaveValue("9");
});


describe('Skeleton (input:steps)', () => {
	test('Skeleton (input:steps - default 9)', () => {
		const slider = render(Slider);
		const steps = slider.getByTestId('choose-steps');
		expect (steps).toHaveValue("9");
	});

	
	for (let i = 2; i <=24; i++) {
		test(`Skeleton (input:steps ${i})`, () => {
			const slider = render(Slider, { steps: i });
			const steps = slider.getByTestId('choose-steps');
			expect(steps).toHaveValue(`${i}`);
		})
	}
});