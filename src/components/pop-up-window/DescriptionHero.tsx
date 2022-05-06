import * as React from 'react';
import {useSelector} from "react-redux";
import {ReduxState, useAppDispatch} from "../../store/state";
import {getHero, HeroType} from "../../store/heroesRedusers";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Typography from "@mui/material/Typography";
import {url} from "../../api/api";
import {Accordion, AccordionDetails, AccordionSummary, Box, Paper, styled} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export type  ParamsType = {
    id: string | undefined
}

export default function DescriptionHero() {
    const dispatch = useAppDispatch()
    const heroData = useSelector<ReduxState, HeroType>(state => state.heroes.hero)
    const {nickname, origin_description, superpowers, image, real_name, catch_phrase} = heroData
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const heroId = useParams<ParamsType>()

    useEffect(() => {
        dispatch(getHero(Number(heroId.id)))
    }, []);

    return (
        <div>
            <Container maxWidth="md">
                <Box sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item>
                                <Card sx={{maxWidth: 345}}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={url(image)}
                                        alt="Hero picture"
                                    />
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <Typography variant="h3" gutterBottom component="div">
                                    {nickname}
                                </Typography>
                                <Typography>
                                    Superpower: {superpowers}
                                </Typography>
                                <Typography>
                                    Catch phrase: {catch_phrase}
                                </Typography>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography sx={{width: '33%', flexShrink: 0}}>Decription</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {origin_description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </div>
    );
}