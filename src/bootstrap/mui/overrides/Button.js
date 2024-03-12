// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
	const disabledStyle = {
		'&.Mui-disabled': {
			backgroundColor: theme.palette.grey[200]
		}
	};
	return {
		MuiButton: {
			defaultProps: {
				// disableElevation: true
			},
			styleOverrides: {
				root: {
					...theme.typography.h6,
				},
				contained: {
					...disabledStyle,
					borderRadius: theme.shape.borderRadius
				},
				outlined: {
					...disabledStyle,
					borderRadius: theme.shape.borderRadius
				},
				containedPrimary: {
					boxShadow: theme.customShadows.primary
				},
				containedSecondary: {
					boxShadow: theme.customShadows.secondary
				},

				containedSuccess: {
					boxShadow: theme.customShadows.success
				},
				containedWarning: {
					boxShadow: theme.customShadows.warning,
				},
				containedError: {
					boxShadow: theme.customShadows.error
				},
			}
		}
	};
}
