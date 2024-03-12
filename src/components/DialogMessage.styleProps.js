export const dialog = (type) => ({
	PaperProps: {
		sx: theme => ({
			borderRadius: theme.shape.borderRadius,
			borderTop: "solid",
			borderTopWidth: 4,
			borderTopColor: `${type}.main`
		})
	}
})

export const dialogContent = ({
	sx: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		minWidth: 200,
		minHeight: 200
	}
})
export const icon = {
	sx: {
		fontSize: 80,
		mb: 2
	}
}

export const title = {
	gutterBottom: true,
	variant: "h6"
}
export const message = {
	gutterBottom: true,
	variant: "body1",
	sx: {
		whiteSpage: "pre-line"
	}
}

export const submit = (type) => ({
	variant: "contained",
	color: type || "primary",
	sx: ({
		mt: 1,
	})
// 	variant={"contained"}
// 	color={type}
// 	sx={theme => ({
// 	mt: 1,
// 	borderRadius: theme.shape.borderRadius,
// })}
})