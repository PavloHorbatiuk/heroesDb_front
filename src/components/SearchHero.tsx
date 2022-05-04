import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {IGlobalState, useAppDispatch} from "../store/state";
import {useSelector} from "react-redux";
import {AllHeroesType} from "../store/heroesRedusers";
import Container from "@mui/material/Container";
import {Box} from '@mui/material';

export default function SearchHero() {
    const dispatch = useAppDispatch()
    const state = useSelector<IGlobalState, AllHeroesType[]>(state => state.heroes.heroesData)
    return (<Box>
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={state.map((option) => option.nickname)}
                        renderInput={(params) => (
                            <TextField
                                variant="standard"
                                sx={{width: '100%'}}
                                {...params}
                                label="Type a hero"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                </Stack>
            </Container>
        </Box>
    )
}


