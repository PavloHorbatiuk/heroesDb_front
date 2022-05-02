import {FormControl} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import OnechangeHendler from "./onChangeHendler";
import {useAppDispatch} from "../../store/state";
import {createHero} from "../../store/heroesRedusers";

export interface StateHero {
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string
}

export default function CreateHero() {
    const dispatch = useAppDispatch()
    const [values, setValues] = React.useState<StateHero>({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        image: ''
    });


    const handleChange = (prop: keyof StateHero) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };
    debugger
    const handlerClickButton = () => {
        dispatch<any>(createHero({...values}))
    }

    return (
        <Box component="form">
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Put information about hero to create...
                    </Typography>
                    <FormControl>
                        <OnechangeHendler
                            label={"Write a nickname of hero"}
                            nickname={"nickname"}
                            onChangeFromInput={handleChange('nickname')}
                            value={values.nickname}
                        />
                        <OnechangeHendler
                            label={"Real name"}
                            nickname={"Real name"}
                            onChangeFromInput={handleChange('real_name')}
                            value={values.real_name}
                        />
                        <OnechangeHendler
                            label={"Description: of hero"}
                            nickname={"Description"}
                            onChangeFromInput={handleChange('origin_description')}
                            value={values.origin_description}
                        />
                        <OnechangeHendler
                            label={"Superpowers"}
                            nickname={"Superpowers"}
                            onChangeFromInput={handleChange('superpowers')}
                            value={values.superpowers}
                        />
                        <OnechangeHendler
                            label={"Catch phrase"}
                            nickname={"Catch phrase"}
                            onChangeFromInput={handleChange('catch_phrase')}
                            value={values.catch_phrase}
                        />
                        <input value={values.image} onChange={handleChange('image')} type="file"/>
                    </FormControl>
                    <Button type={'submit'} onClick={handlerClickButton} variant="contained">Create</Button>
                </Stack>
            </Container>
        </Box>
    )
}



