"use client"

import {
	AppBar,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	FormHelperText,
	IconButton,
	InputLabel,
	Rating,
	Stack,
	TextField,
	Toolbar,
	Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import {useFormik} from "formik";
import {useState} from "react";
import * as styleProps from "./DogFormDialog.styleProps";
import * as yup from 'yup'

export default function DogFormDialog(props) {
	const {onExited, item, onSubmitForm} = props
	const [open, setOpen] = useState(true)
	const [isLoading, setLoading] = useState(false)
	const onSubmit = (e) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			Boolean(onSubmitForm) && onSubmitForm(e, {
				...item,
				name: values.name,
				rate: values.rate,
				distance: values.distance,
				notes: values.notes,
			})
			handleClose()
		}, 1000)
	}
	const {submitForm, errors, touched, values, handleBlur, handleChange} = useFormik({
		validateOnBlur: false,
		initialValues: {
			name: item?.name || null,
			rate: item?.rate || null,
			distance: item?.distance || null,
			notes: item?.notes || null,
		},
		validationSchema: yup.object({
			name: yup.string().nullable().required('name is required.'),
			distance: yup.string().nullable().required('distance is required.'),
			rate: yup.number().nullable().required("rate is required."),
		}),
		onSubmit
	})
	const handleSubmit = async (e) => {
		e.preventDefault()
		await submitForm()
	}
	const handleClose = () => {
		setOpen(false)
	}
	return <Dialog
		{...styleProps.dialog}
		open={open}
		onClose={handleClose}
		onSubmit={handleSubmit}
		TransitionProps={{
			onExited
		}}
	>
		<AppBar {...styleProps.appbar}>
			<Toolbar {...styleProps.toolbar}>
				<Typography
					{...styleProps.header}
				/>
				<IconButton
					{...styleProps.closeButton}
					onClick={handleClose}
				>
					<CloseIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
		<DialogContent {...styleProps.dialogContent}>
			<TextField
				{...styleProps.nameField}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.name || ""}
				helperText={touched.name && errors.name}
				error={Boolean(touched.name && errors.name)}
			/>
			<TextField
				{...styleProps.distanceField}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.distance || ""}
				helperText={touched.distance && errors.distance}
				error={Boolean(touched.distance && errors.distance)}
			/>
			<InputLabel
				required
				shrink={true}
				htmlFor={"rate"}
				sx={{
					display: 'flex'
				}}
			>
				<Typography>Rate</Typography>
			</InputLabel>
			<Rating
				{...styleProps.rateField}
				onBlur={handleBlur}
				onChange={handleChange}
				value={parseFloat(values.rate) || null}
				icon={<PetsRoundedIcon fontSize="inherit"/>}
				emptyIcon={<PetsRoundedIcon fontSize="inherit"/>}
			/>
			<Stack {...styleProps.rateFieldDescription}>
				<Typography variant={"caption"}>Bad</Typography>
				<Stack flexGrow={1}/>
				<Typography variant={"caption"}>Excellent</Typography>
			</Stack>

			{Boolean(touched.rate && errors.rate) && <FormHelperText error>
				{touched.rate && errors.rate}
			</FormHelperText>}

			<TextField
				{...styleProps.notesField}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.notes || ""}
				helperText={touched.notes && errors.notes}
				error={Boolean(touched.notes && errors.notes)}
			/>

		</DialogContent>
		<DialogActions>
			<Button
				{...styleProps.submitButton}
				startIcon={isLoading && <CircularProgress size={30} color={"secondary"}/>}
				disabled={isLoading}
			/>
		</DialogActions>
	</Dialog>
}