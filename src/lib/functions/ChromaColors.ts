import chroma from "./Chromajs";

export interface ChromaSettings {
    firstColor: string,
    secondColor: string,
    steps: number
}

export interface ColorStyle {
	hex: string;
	rgb: string;
	hsl: string;
}

export const getChromaColors = (settings:ChromaSettings): string[] => {
    const { firstColor, secondColor, steps } = {...settings};
    return chroma.scale([firstColor, secondColor]).colors(steps);
}

export const getColors = (settings:ChromaSettings): ColorStyle[] => {
    const colorList: string[] = getChromaColors(settings);
    const colors = colorList.map(color => stringToColorStyle(color));
    return colors;
}

export const stringToColorStyle = (color: string): ColorStyle => {
    const hex = chroma(color).hex();
    const rgb = chroma(color).css();
    const hsl = chroma(color).css('hsl');

    return { hex, rgb, hsl};
}