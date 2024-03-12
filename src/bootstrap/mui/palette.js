'use client';
// material-ui
import {createTheme} from '@mui/material/styles';

// third-party
import {presetPalettes} from '@ant-design/colors';

// project import
import ThemeOption from './theme';

export const isColorLight = (color) => {
	const hex = color.replace('#', '');
	const c_r = parseInt(hex.substr(0, 2), 16);
	const c_g = parseInt(hex.substr(2, 2), 16);
	const c_b = parseInt(hex.substr(4, 2), 16);
	const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
	return false
	// return brightness > 155;
}

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (config = {}) => {
	const {mode = "light", primary: primaryColor, secondary: secondaryColor, tertiary: tertiaryColor} = config

	const colors = presetPalettes;

	const greyPrimary = [
		'#ffffff',
		'#fafafa',
		'#f5f5f5',
		'#f0f0f0',
		'#d9d9d9',
		'#bfbfbf',
		'#8c8c8c',
		'#595959',
		'#262626',
		'#141414',
		'#000000'
	];
	const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
	const greyConstant = ['#fafafb', '#e6ebf1'];

	colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

	const paletteColor = ThemeOption(colors);

	const {palette} = createTheme();
	const {augmentColor} = palette;
	const createColor = (mainColor, attrs) => augmentColor({
		color: {
			...attrs,
			main: mainColor
		}
	});
	const primary = createColor(primaryColor, {
		contrastText: isColorLight(primaryColor) ? "#000" : "#fff"
	})
	const secondary = createColor(secondaryColor, {
		contrastText: primary.main
	})
	return {
		mode,
		common: {
			black: '#000',
			white: '#fff'
		},
		...paletteColor,
		primary, secondary,
	};
};

export default Palette;
