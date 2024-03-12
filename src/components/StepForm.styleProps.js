export const card = ({
	raised: true,
	elevation: 5,
	sx: theme => ({
		// mx: {
		// 	md: 0,
		// 	sm: .5,
		// 	xs: .5,
		// },
		backgroundColor: "background.paper",
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.customShadows.z16
	})
})

export const content = ({
	sx: {
		pt: 2,
		px: 2,
		pb: 1,
		minHeight: 300,
		maxWidth: {
			xs: "100%",
			sm: "100%",
			md: 600
		},
		minWidth: {
			xs: "100%",
			sm: 350,
			md: 600
		},
		width: {
			xs: "100%",
			sm: "auto",
			md: "auto"
		}
	}
})

export const header = ({
	variant: "h6",
	gutterBottom: true,
	sx: {}
})

export const description = ({
	variant: "caption",
	component: "div",
	gutterBottom: true,
	sx: {
		color: "grey.500"

	}
})

export const actions = ({
	sx: {
		pt: 1,
		px: 2,
		pb: 2,
		width: "100%",
		alignItems: "end",
		justifyContent: "end"
	}
})

export const back = ({
	variant: "outlined",
	color: "primary",
	size: "large",
	sx: {}
})
export const submit = ({
	variant: "contained",
	color: "primary",
	size: "large",
	sx: {}
})

export const countField = ({
	required: true,
	fullWidth: true,
	id: "count",
	name: "count",
	type: "number",
	margin: "normal",
	variant: "outlined",
	label: "No. of dogs walked",
	placeholder: "Enter number of dogs walked.",
	InputLabelProps: {
		shrink: true
	},
	inputProps: {
		step: 1
	}
})


export const dogList = ({
	sx: {
		maxHeight: 500,
		overflowY: "auto",
		pt: 0
	}
})
