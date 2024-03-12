"use client"
import {Fragment, useCallback, useState} from 'react'
import {Backdrop, Box, CircularProgress} from "@mui/material"
import * as styleProps from './page.styleProps.js'

import {AnimatePresence, motion} from 'framer-motion'
import StepCountForm from "@/components/StepCountForm";
import StepDogsForm from "@/components/StepDogsForm";
import {useFormik} from "formik";
import DialogMessage from "@/components/DialogMessage";
import * as yup from 'yup'

const STEP = {
	COUNT: 0,
	FORM: 1,
}
export default function Page(props) {
	const [step, setStep] = useState(STEP.COUNT)
	const [isLoading, setLoading] = useState(false)
	const [success, setSuccess] = useState(null)
	const handleSubmit = (e) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setSuccess({
				type: "success",
				title: "Success",
				message: "You have successfully submitted this form.",
				confirm: "Ok",
			})
		}, 5000)
	}
	const {submitForm, resetForm, ...formik} = useFormik({
		initialValues: {
			count: 0,
			dogs: [],
		},
		validationSchema: yup.object({
			count: yup.number().nullable().required("number of dogs walked is required.").min(1, "the number of dogs walked should be at least one.")
		}),
		onSubmit: handleSubmit
	})
	const handleBack = useCallback((e) => {
			switch (step) {
				case STEP.COUNT:
					break
				case STEP.FORM:
					setStep(STEP.COUNT)
					break
			}
		},
		[step],
	);
	const handleNext = useCallback(async (e) => {
		if (step === STEP.COUNT) {
			let dogs = []
			for (let i = 0; i < formik.values.count; i++) {
				let exist = (formik.values.dogs || []).filter(dog => dog.id === i && Boolean(dog.name))[0]
				if (exist)
					dogs.push(exist)
				else
					dogs.push({
						id: i,
						dog: null,
						rate: null,
						distance: null,
						notes: null,
					})
			}
			await formik.setFieldValue("dogs", dogs)
			setStep(STEP.FORM)
		} else if (step === STEP.FORM) {
			await submitForm()
		}
	}, [step, formik, submitForm])

	return <Fragment>

		<AnimatePresence mode={"wait"}>
			<Box {...styleProps.main}>
				{step === STEP.COUNT && <motion.div
					initial={{x: 10, opacity: 0}}
					animate={{x: 0, opacity: 1}}
					exit={{x: -10, opacity: 0}}
					transition={{duration: 0.5}}
				>
					<StepCountForm
						formik={formik}
						isLoading={isLoading}
						onNextClick={handleNext}
					/>
				</motion.div>}
				{step === STEP.FORM && <motion.div
					initial={{x: 10, opacity: 0}}
					animate={{x: 0, opacity: 1}}
					exit={{x: -10, opacity: 0}}
					transition={{duration: 0.5}}
				>
					<StepDogsForm
						formik={formik}
						isLoading={isLoading}
						onBackClick={handleBack}
						onNextClick={handleNext}
					/>
				</motion.div>}
			</Box>
		</AnimatePresence>
		<Backdrop
			{...styleProps.backdrop}
			open={isLoading}
		>
			<CircularProgress {...styleProps.loader} />
		</Backdrop>

		<DialogMessage
			{...success}
			open={Boolean(success)}
			onClose={e => {
				setSuccess(null)
				setStep(STEP.COUNT)
				resetForm()
			}}
		/>
	</Fragment>
}



