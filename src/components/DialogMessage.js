"use client"
import {useMemo} from "react";
import {Button, Dialog, DialogContent, Typography} from "@mui/material";
import {CheckCircleOutline, InfoOutlined} from "@mui/icons-material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import * as styleProps from './DialogMessage.styleProps'
export default function DialogMessage(props) {
	const {
		open,
		onClose,
		type = "primary",
		icon = null,
		title,
		message,
	} = props
	const VIcon = useMemo(() => {
		let newIcon = null
		if (icon) return icon
		switch (type) {
			case "success":
				newIcon = CheckCircleOutline
				break
			case "error":
				newIcon = ErrorOutlineOutlinedIcon
				break
			case "warning":
				newIcon = ReportProblemOutlinedIcon
				break
			case "info":
				newIcon = InfoOutlined
				break
		}
		return newIcon
	}, [icon, type]);
	return <Dialog
		{...styleProps.dialog(type)}
		open={open}
		onClose={onClose}
	>
		<DialogContent
			{...styleProps.dialogContent}
		>
			{Boolean(VIcon) && <VIcon
				{...styleProps.icon}
				color={type || "primary"}
			/>}
			{Boolean(title) && <Typography
				{...styleProps.title}
			>
				{title}
			</Typography>}
			{Boolean(message) &&
				<Typography
					{...styleProps.message}
				>
					{message}
				</Typography>}

			<Button
				{...styleProps.submit(type)}
				onClick={onClose}
			>
				Ok
			</Button>
		</DialogContent>
	</Dialog>
}