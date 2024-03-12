export const main = ({
	component: "main",
	sx: {
		display: 'flex',
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		minHeight: "100%",
	}
})

export const backdrop = ({
	sx: {color: '#fff', zIndex: 10000}
})
export const loader = ({
	size: 100,
	color: "primary"
})