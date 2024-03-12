"use client"
import {Fragment} from 'react'
import {Card, CardActionArea, CardContent, ListItem, ListItemText, Stack, Typography} from "@mui/material";
import {ChevronRight, PetsRounded} from "@mui/icons-material";

export default function DogListItem(props) {
	const {item, onClick} = props
	const rates = [...Array(parseInt(item.rate) || 0).keys()]
	return <Fragment>
		<Card
			elevation={0}
			onClick={onClick}
			sx={theme => ({
				m: 2,
				boxShadow: theme.customShadows.z8,

			})}
		>
			<CardActionArea>
				<CardContent sx={{
					...(Boolean(item.name) && ({
						p: 0
					}))
				}}>
					{Boolean(item.name) ? <ListItem>
						<ListItemText
							primary={item.name}
							primaryTypographyProps={{
								component: "div",
								variant: "body1",
							}}
							secondary={<Fragment>
								{/*<Stack sx={{mr: 1}}>*/}
								{/*	<Typography variant={"caption"}>Rating</Typography>*/}
								{/*</Stack>*/}
								{rates.map(rate => <PetsRounded color={"primary"} key={rate}/>)}
								<Stack flexGrow={1} />
							</Fragment>}
							secondaryTypographyProps={{
								component: "div",
								sx: {
									display: "flex",
									alignItems: "center",
									justifyContent: 'space-between',
									flexDirection: "row"
								}
							}}
						/>
						<ChevronRight sx={{color: "grey.600"}}/>
					</ListItem> : <Fragment>
						<Typography
							component={"div"}
							variant={"caption"}
							align={"center"}
							sx={{color: "grey.500", width: "100%"}}
						>Click to set dog details.</Typography>
					</Fragment>}
				</CardContent>
			</CardActionArea>
		</Card>
	</Fragment>
}