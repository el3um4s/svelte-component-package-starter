/**
 * @jest-environment jsdom
 */

import { Slider } from '../lib/index';
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

describe('Label', () => {
	test('Label exist', () => {
		const slider = render(Slider);
		const label = slider.container.getElementsByTagName('label')[0];
		expect(label).toBeInTheDocument();
		expect(label).toBeVisible();
	})

	test('Label has text (default)', () => {
		const slider = render(Slider);
		const label = slider.container.getElementsByTagName('label')[0];
		expect(label).toHaveTextContent('Steps');
	})

	test('Label has text (custom)', () => {
		const slider = render(Slider, {label: "Hello World"});
		const label = slider.container.getElementsByTagName('label')[0];
		expect(label).toHaveTextContent('Hello World');
	})

	test('Label has changing text (default to "Ciao")', async () => {
		const slider = render(Slider);
		let label = slider.container.getElementsByTagName('label')[0];
		expect(label).toHaveTextContent('Steps');
		await slider.rerender({label:"Ciao"});
		label = slider.container.getElementsByTagName('label')[0];
		expect(label).toHaveTextContent('Ciao');
	})


	test('Label has changing text (default to "")', async () => {
		const slider = render(Slider);
		let label = slider.container.getElementsByTagName('label');
		expect(label[0]).toHaveTextContent('Steps');
		await slider.rerender({label:""});
		label = slider.container.getElementsByTagName('label');
		expect(label.length).toBe(0);
		expect(label[0]).toBeUndefined();
		
	})
})