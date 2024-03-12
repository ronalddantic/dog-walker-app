export const dialog = ({
	component: "form",
	PaperProps: {
		sx: theme => ({
			borderRadius: theme.shape.borderRadius
		})
	}
})
export const dialogContent = ({
	sx: {
		pt: 0
	}
})

export const appbar = ({
	color: "transparent",
	elevation: 0,
	sx: {
		position: "relative"
	}
})
export const toolbar = ({})

export const header = ({
	variant: "h4",
	component: "div",
	children: "Dog Details",
	sx: {
		flexGrow: 1,
		mr: 2
	}
})

export const closeButton = ({
	edge: "end",
	color: "inherit",
	"aria-label": "close",
})


export const submitButton = ({
	type: "submit",
	variant: "contained",
	color: "primary",
	children: "Submit",
	sx: {
		m: 2
	}
})


export const nameField = ({
	required: true,
	fullWidth: true,
	id: "name",
	name: "name",
	type: "text",
	margin: "normal",
	variant: "standard",
	label: "Dog Name",
	placeholder: "Enter dog name.",
	InputLabelProps: {
		shrink: true
	},
})


export const distanceField = ({
	required: true,
	fullWidth: true,
	id: "distance",
	name: "distance",
	type: "number",
	margin: "normal",
	variant: "standard",
	label: "Distance (meters)",
	placeholder: "Enter total distance walked.",
	InputLabelProps: {
		shrink: true
	},
	sx: {
		mb: 2
	}
})

export const rateField = ({
	name: "rate",
	size: "large",
	precision: 1,
	color: "primary",
	sx: {
		fontSize: 44,
		width: "100%",
		justifyContent: "space-between",
		'& .MuiRating-iconFilled': {
			color: 'primary.main',
		},
		'& .MuiRating-iconHover': {
			color: 'primary.main',
		},
		"> .MuiRating-visuallyHidden": {
			display: "none"
		}
	}
})


export const rateFieldDescription = ({
	spacing: 1,
	direction: "row",
	component: "div",
	alignItems: "center",
	justifyContent: "space-between",
	sx: {
		ml: 1
	}
})
export const notesField = ({
	fullWidth: true,
	multiline: true,
	minRows: 4,
	id: "notes",
	name: "notes",
	margin: "normal",
	variant: "standard",
	label: "Notes (optional)",
	placeholder: "(e.g.,temperament, preferences, aggressiveness, etc.",
	InputLabelProps: {
		shrink: true
	},
	inputProps: {
		step: 1
	},
	sx: theme => ({
		borderRadius: theme.shape.borderRadius
	})
})

