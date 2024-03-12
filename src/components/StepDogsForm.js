"use client"
import {Fragment, useMemo, useState} from 'react'
import * as styleProps from "./StepForm.styleProps";
import {Button, Card, CardActions, CardContent, List, ListSubheader, Stack, Typography} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import DogFormDialog from "@/components/DogFormDialog";
import DogListItem from "@/components/DogListItem";

export default function StepDogsForm(props) {
	const {
		formik,
		onNextClick = null,
		onBackClick = null
	} = props
	const [item, setItem] = useState(null)
	const handleSubmitItem = (e, item) => {
		let items = formik.values.dogs
		formik.setFieldValue("dogs",
			items.map(dog => ({
				...dog,
				...(dog.id === item.id && {
					...item
				})
			}))
		)
	}
	const assignedItems = useMemo(() => formik.values.dogs.filter(item => Boolean(item.name)), [formik.values.dogs]);
	const isSubmitEnabled = assignedItems.length === formik.values.dogs.length
	return <Fragment>
		<Card {...styleProps.card}>
			<CardContent {...styleProps.content}>
				<Typography {...styleProps.header}>Dog List</Typography>
				<List {...styleProps.dogList}>
					<ListSubheader>{assignedItems.length || "0"} out
						of {formik.values.dogs.length} dogs</ListSubheader>
					{formik.values.dogs.map((dog, index) => <DogListItem
						item={dog}
						key={dog.id}
						onClick={e => setItem(dog)}
					/>)}
				</List>
			</CardContent>
			<CardActions {...styleProps.actions}>
				<Button
					{...styleProps.back}
					variant={"text"}
					startIcon={<ChevronLeft/>}
					onClick={onBackClick}
				>
					Back
				</Button>
				<Stack flexGrow={1}/>
				<Button
					{...styleProps.submit}
					disabled={!isSubmitEnabled}
					onClick={onNextClick}
				>
					Submit
				</Button>
			</CardActions>
		</Card>
		{Boolean(item) && <DogFormDialog
			item={item}
			onSubmitForm={handleSubmitItem}
			onExited={e => setItem(null)}
		/>}
	</Fragment>
}