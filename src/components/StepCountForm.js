"use client"

import * as styleProps from "./StepForm.styleProps";
import {Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

export default function StepCountForm(props) {
	const {
		formik,
		isLoading = false,
		onNextClick = null,
		onBackClick = null
	} = props
	const {errors, touched, values, handleBlur, handleChange} = formik
	return <Card {...styleProps.card}>
		<CardContent {...styleProps.content}>
			<Typography {...styleProps.header}>Dog Walker Feedback</Typography>
			<Typography {...styleProps.description}>
				This application aims to streamline the logging process for dog walkers, making it easier to
				track and share information about walks.
			</Typography>
			<TextField
				{...styleProps.countField}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.count || ""}
				helperText={touched.count && errors.count}
				error={Boolean(touched.count && errors.count)}
			/>
		</CardContent>
		<CardActions {...styleProps.actions}>
			<Button
				{...styleProps.submit}
				disabled={!Boolean(values.count) && !isLoading}
				endIcon={<ChevronRight/>}
				onClick={onNextClick}
			>
				Next
			</Button>
		</CardActions>
	</Card>
}