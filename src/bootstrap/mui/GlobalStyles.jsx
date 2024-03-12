// material
import {useTheme} from '@mui/material/styles';
import {GlobalStyles as GlobalThemeStyles} from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
	const theme = useTheme();
	return (
		<GlobalThemeStyles
			styles={{
				'*': {
					minWidth: 0,
					margin: 0,
					padding: 0,
					boxSizing: 'border-box'
				},
				html: {
					minHeight: '100%',
					height: '100%',
					WebkitOverflowScrolling: 'touch',
					scrollBehavior: "smooth"
				},
				".pre-line": {
					whiteSpace: 'pre-line',
					wordBreak: 'break-word'
				},

				body: {
					position: "relative",
					width: '100%',
					minHeight: '100%',
					height: '100%',
					backgroundColor: "#F8F9FC",
					scrollBehavior: "smooth",
				},

				img: {display: 'block', maxWidth: '100%'},
			}}
		/>
	);
}
