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
import {useSelector} from "react-redux";
import {ReduxState, useAppDispatch} from "../../store/state";
import {HeroType, deleteHero} from "../../store/heroesRedusers";
import PeopleIcon from '@mui/icons-material/People';
import SearchHero from "../SearchHero";
import {PATH} from "../utils/routes";
import {url} from "../../api/api";
import {IconButton, Link, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";


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
    const heroesData = useSelector<ReduxState, HeroType[]>(state => state.heroes.heroesData)
    const navigate = useNavigate()
    const routeHandler = () => navigate(PATH.CREATE_HERO)
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
                            <Button onClick={routeHandler}>Add new hero to db</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {heroesData.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia onClick={() => navigate(`update/image/${card.id}`)}
                                               component="img"
                                               sx={{
                                                   // 16:9
                                                   cursor: 'pointer',
                                                   height: 250,
                                                   '&:hover': {"border": "1px solid blue"}
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
                                        <Button size="small"
                                                onClick={() => navigate(`edit/${card.id}`)}>Edit</Button>
                                        <Button size="small"
                                                onClick={() => navigate(`/hero/${card.id}`)}>View</Button>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => dispatch(deleteHero(card.id))}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </CardActions>
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