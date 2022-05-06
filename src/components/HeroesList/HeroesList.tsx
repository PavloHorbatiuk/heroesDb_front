import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {useSelector} from "react-redux";
import {ReduxState, useAppDispatch} from "../../store/state";
import {HeroType, deleteHero} from "../../store/heroesRedusers";
import PeopleIcon from '@mui/icons-material/People';
import ModalCreateHero from "../pop-up-window/ModalCreateHero";
import SearchHero from "../SearchHero";
import {useNavigate} from "react-router-dom";
import {PATH} from "../utils/routes";
import {url} from "../../api/api";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://pavlohorbatiuk.github.io/portfolio_2.0/">
                My portfolio
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function ModalWindowCreateHero() {
    const dispatch = useAppDispatch()
    const state = useSelector<ReduxState, HeroType[]>(state => state.heroes.heroesData)
    const navigate = useNavigate()

    return (
        <div>
            <CssBaseline/>
            <AppBar sx={{backgroundColor: '#F2F4E5', color: "#F30003"}} position="relative">
                <Toolbar>
                    <PeopleIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        SuperHeroes
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            The biggest superheroes database in the entire world
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            one step to find all about hero...
                        </Typography>
                        <Stack spacing={1}>
                            <SearchHero/>
                            <Button>Find a hero</Button>
                        </Stack>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <ModalCreateHero/>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {state.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={url(card.image)}
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.nickname}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => navigate(`/${card.id}`)}>Edit</Button>
                                        <Button size="small"
                                                onClick={() => navigate(`${PATH.HERO_ROUTE}/${card.id} `)}>View</Button>
                                        <Button onClick={() => dispatch(deleteHero(card.id))}
                                                size="small">Delete</Button></CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Pasha team
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </div>
    );
}