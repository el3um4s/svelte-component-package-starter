import { getChromaColors, stringToColorStyle, getColors } from "../lib/functions/ChromaColors";

test("getChromaColors", () => {
    const firstColor = "white";
    const secondColor = "black";
    const steps = 9;

    const colors = getChromaColors({firstColor, secondColor, steps});

    expect(colors).toStrictEqual(["#ffffff","#dfdfdf","#bfbfbf","#9f9f9f","#808080","#606060","#404040","#202020","#000000"]);
})

describe.each([
	{
		color: 'red',
		expected: {
			hex: '#ff0000',
			rgb: 'rgb(255,0,0)',
			hsl: 'hsl(0,100%,50%)'
		}
	},
	{
		color: 'rgb(240,240,10)',
		expected: {
			hex: '#f0f00a',
			rgb: 'rgb(240,240,10)',
			hsl: 'hsl(60,92%,49.02%)'
		}
	},
	{
		color: 'hsl(94, 65%, 34%)',
		expected: {
			hex: '#4f8f1e',
			rgb: 'rgb(79,143,30)',
			hsl: 'hsl(93.98,65.32%,33.92%)'
		}
	},
    {
		color: '#E78DC3',
		expected: {
			hex: '#e78dc3',
			rgb: 'rgb(231,141,195)',
			hsl: 'hsl(324,65.22%,72.94%)'
		}
	}
])('stringToColorStyle (color=$color)', ({ color, expected }) => {
	test(`returns ${color}`, () => {
		const result = stringToColorStyle(color);
		expect(result).toStrictEqual(expected);
	});
});

describe.each([
	{
		firstColor: 'white',
        secondColor: "red",
        steps: 5
	},
    {
		firstColor: '#f0f00a',
        secondColor: "red",
        steps: 9
	},
    {
		firstColor: '#f0f00a',
        secondColor: "hsl(94,65%,34%)",
        steps: 12
	}
])('getColors ($firstColor, $secondColor, $steps)', ({ firstColor, secondColor, steps }) => {
	test(`returns steps:${steps}`, () => {
		const result = getColors({firstColor, secondColor, steps});
		expect(result.length).toBe(steps);
	});
});