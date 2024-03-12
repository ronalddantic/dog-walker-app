"use client"

import {useMemo} from 'react'
import {CssBaseline, StyledEngineProvider} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Palette from "@/bootstrap/mui/palette";
import GlobalStyles from "@/bootstrap/mui/GlobalStyles";
import Typography from "@/bootstrap/mui/typography";
import {createCustomShadow} from "@/bootstrap/mui/shadows";
import componentsOverride from './overrides';
import shape from './shape'

export default function MuiTheme({children}) {
	const theme = useMemo(() => {
		const palette = Palette({
			mode: "light",
			primary: "#DBB07E",
			secondary: "#EEE1C9",
		})
		const typography = Typography("Plus Jakarta Sans, sans-serif")
		const customShadows = createCustomShadow(palette)
		let themes = createTheme({
			breakpoints: {
				values: {
					xs: 0,
					sm: 768,
					md: 1024,
					lg: 1266,
					xl: 1536
				}
			},
			palette,
			shape,
			customShadows,
			typography
		})
		themes.components = componentsOverride(themes);
		return themes
	}, []);
	return <StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<GlobalStyles/>
			{children}
		</ThemeProvider>
	</StyledEngineProvider>

}