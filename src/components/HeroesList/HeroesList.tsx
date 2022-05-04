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
import {IGlobalState, useAppDispatch} from "../../store/state";
import {AllHeroesType, deleteHero} from "../../store/heroesRedusers";
import {TextField} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import ModalWindow from "../pop-up-window/ModalWindow";

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


export default function Album() {
    const dispatch = useAppDispatch()
    const state = useSelector<IGlobalState, AllHeroesType[]>(state => state.heroes.heroesData)
    // const deleteHandler = () => dispatch<any>(deleteHero())
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
                            <TextField sx={{width: '100%'}} id="standard-basic" label="Type a hero"
                                       variant="standard"/>
                            <Button>Find a hero</Button>
                        </Stack>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <ModalWindow/>
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
                                        image={`http://localhost:7000//${card.image}`}
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.nickname}
                                        </Typography>
                                        <Typography>
                                            {card.origin_description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                        <Button  size="small">delete</Button>
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