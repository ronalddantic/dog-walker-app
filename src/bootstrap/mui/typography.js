// ----------------------------------------------------------------------

function pxToRem(value) {
	return `${value / 16}rem`;
}

function responsiveFontSizes({sm, md, lg}) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm)
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md)
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg)
		}
	};
}

const Typography = (fontFamily) => ({
	fontFamily,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 500,
	h1: {
		fontWeight: "bold",
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		...responsiveFontSizes({sm: 52, md: 58, lg: 64})
	},
	h2: {
		fontWeight: "bold",
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({sm: 40, md: 44, lg: 48})
	},
	h3: {
		fontWeight: "bold",
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({sm: 26, md: 30, lg: 32})
	},
	h4: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({sm: 20, md: 24, lg: 24})
	},
	h5: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		...responsiveFontSizes({sm: 19, md: 20, lg: 20})
	},
	h6: {
		fontWeight: 600,
		lineHeight: 28 / 18,
		fontSize: pxToRem(17),
		...responsiveFontSizes({sm: 18, md: 18, lg: 18})
	},
	subtitle1: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(16)
	},
	subtitle2: {
		fontWeight: 600,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14)
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(16)
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(14)
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12)
	},
	overline: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		letterSpacing: 1.1,
		textTransform: 'uppercase'
	},
	button: {
		fontWeight: 600,
		lineHeight: 1.5,
		textTransform: undefined,
		fontSize: pxToRem(20),
	},
	button_outlined: {
		border: "2px solid",
		borderColor: "primary.contrastText",
		borderRadius: 4,
	},
	icon: {
		size: pxToRem(24)
	},

});

export default Typography;