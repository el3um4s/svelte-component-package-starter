/**
 * @jest-environment jsdom
 */

import { GridColors } from '../lib/index';
import { render } from '@testing-library/svelte';
import { stringToColorStyle } from "../lib/functions/ChromaColors";
import match from "@el3um4s/match";


test('Skeleton (input:firstColor)', () => {
	const gridColors = render(GridColors);

	const inputColor = gridColors.getByTestId('choose-first-color');
	expect(inputColor).toBeVisible();
	expect(inputColor).toHaveAttribute('type', 'color');
	expect(inputColor).toHaveValue('#fafa6e');
});

describe.each([{ firstColor: 'red' }, { firstColor: 'rgb(240,240,10)' }, { firstColor: 'hsl(94, 65%, 34%)' }])(
	'Skeleton (input:firstColor=$firstColor)',
	({ firstColor }) => {
		test(`returns ${firstColor}`, () => {
			const gridColors = render(GridColors, { firstColor });
			const color = stringToColorStyle(firstColor).hex;

			const inputColor = gridColors.getByTestId('choose-first-color');
			expect(inputColor).toBeVisible();
			expect(inputColor).toHaveAttribute('type', 'color');
			expect(inputColor).toHaveValue(color);
		});
	}
);

test('Skeleton (input:secondColor)', () => {
	const gridColors = render(GridColors);

	const inputColor = gridColors.getByTestId('choose-second-color');
	expect(inputColor).toBeVisible();
	expect(inputColor).toHaveAttribute('type', 'color');
	expect(inputColor).toHaveValue('#ff0000');
});

describe.each([{ secondColor: 'red' }, { secondColor: 'rgb(240,240,10)' }, { secondColor: 'hsl(94, 65%, 34%)' }])(
	'Skeleton (input:secondColor=$secondColor)',
	({ secondColor }) => {
		test(`returns ${secondColor}`, () => {
			const gridColors = render(GridColors, {secondColor });
			const color = stringToColorStyle(secondColor).hex;

			const inputColor = gridColors.getByTestId('choose-second-color');
			expect(inputColor).toBeVisible();
			expect(inputColor).toHaveAttribute('type', 'color');
			expect(inputColor).toHaveValue(color);
		});
	}
);

describe('Skeleton (input:steps)', () => {
	test('Skeleton (input:steps - default 9)', () => {
		const gridColors = render(GridColors);
		const steps = gridColors.getByTestId('choose-steps');
		expect (steps).toHaveValue("9");
	});

	
	for (let i = 2; i <=24; i++) {
		test(`Skeleton (input:steps ${i})`, () => {
			const gridColors = render(GridColors, { steps: i });
			const steps = gridColors.getByTestId('choose-steps');
			expect(steps).toHaveValue(`${i}`);
			const rows = gridColors.getAllByRole('row');
			const rowsNumber = rows.length;
			expect(rowsNumber).toBe(i+1);
		})
	}
});

describe('Skeleton (table)', () => {
	test('Table is visible', () => {
		const gridColors = render(GridColors);
		const table = gridColors.getByRole('table');
		expect(table).toBeVisible();
	});

	test('Table has 5 headers', () => {
		const gridColors = render(GridColors);
		const columnHeader = gridColors.getAllByRole('columnheader');
		const numberHeaders = columnHeader.length;
		expect(numberHeaders).toBe(4);
	});

	test("Table headers are: '', 'Color', 'HEX', 'RGB', 'HLS'", () => {
		const gridColors = render(GridColors);
		const columnHeader = gridColors.getAllByRole('columnheader');
		expect(columnHeader[0]).toHaveTextContent('Color');
		expect(columnHeader[1]).toHaveTextContent('HEX');
		expect(columnHeader[2]).toHaveTextContent('RGB');
		expect(columnHeader[3]).toHaveTextContent('HLS');
	});

	test('Table has 9 rows', () => {
		const gridColors = render(GridColors);
		const rows = gridColors.getAllByRole('row');
		const rowsNumber = rows.length;
		expect(rowsNumber).toBe(10);
	});

	test('Each row has 4 columns', () => {
		const gridColors = render(GridColors);
		const rows = gridColors.getAllByRole('row');

		rows.forEach((r) => {
			const columnsBody = r.getElementsByTagName('td').length;
			const columnHead = r.getElementsByTagName('th').length;
			expect(columnsBody + columnHead).toBe(4);
		});
	});

	test('Cells have color code', () => {
		const gridColors = render(GridColors);
		const cells = gridColors.getAllByRole('cell');
		cells.forEach(cell => {
			match(cell.attributes)
				.on( (c:NamedNodeMap) => c.getNamedItem("data-color-background") !== null, () => {expect(cell).toBeEmptyDOMElement();})
				.on( (c:NamedNodeMap) => c.getNamedItem("data-color-hex") !== null, () => {expect(cell).not.toBeEmptyDOMElement();})
				.on( (c:NamedNodeMap) => c.getNamedItem("data-color-rgb") !== null, () => {expect(cell).not.toBeEmptyDOMElement();})
				.on( (c:NamedNodeMap) => c.getNamedItem("data-color-hsl") !== null, () => {expect(cell).not.toBeEmptyDOMElement();})
		});
	})
});

describe('Change steps', () => {
	test('Skeleton (input:steps - default 9 to 12)', async () => {
		const gridColors = render(GridColors);
		const steps = gridColors.getByTestId('choose-steps');
		expect (steps).toHaveValue("9");
		await gridColors.component.$set({ steps: 12 });
		expect (steps).toHaveValue("12");
		const rows = gridColors.getAllByRole('row');
		const rowsNumber = rows.length;
		expect(rowsNumber).toBe(13);
	});

})