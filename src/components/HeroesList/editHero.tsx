import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useAppDispatch} from "../../store/state";
import { editHero} from "../../store/heroesRedusers";
import {useFormik} from "formik";
import BasicAlerts from "../utils/alerts";
import {useParams} from "react-router-dom";



export interface StateHeroType {
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    image: string
}

type FormikErrorType = {
    nickname?: string
    image?: string

}

export const EditHero = React.memo(function () {
        const dispatch = useAppDispatch()
        const params = useParams()
        const formik = useFormik({
            initialValues: {
                nickname: '',
                real_name: '',
                origin_description: '',
                superpowers: '',
                catch_phrase: '',
                image: ''
            },
            onSubmit: values => {
                const formData = new FormData();
                for (let value in values) {
                    // @ts-ignore
                    formData.append(value, values[value]);
                }
                // @ts-ignore
                dispatch(editHero(Number(params.id), formData))
            }
        })

        const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) return;
            formik.setFieldValue('image', e.target!.files[0]!)
        }
        return (
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <Box>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Put information about hero to update...
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                variant='filled'
                                id="nickname"
                                label='nickname'
                                name="nickname"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.nickname}
                            />
                            < TextField
                                label='real_name'
                                variant='filled'
                                id="real_name"
                                name="real_name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.real_name}
                            />
                            <TextField
                                label={'description'}
                                variant='filled'
                                id="origin_description"
                                name="origin_description"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.origin_description}
                            />
                            <TextField
                                label={'superpower'}
                                variant='filled'
                                id="superpowers"
                                name="superpowers"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.superpowers}
                            />
                            <TextField
                                label={'catch phrase'}
                                variant='filled'
                                id="catch_phrase"
                                name="catch_phrase"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.catch_phrase}
                            />
                            <input
                                id="image"
                                name="image"
                                type='file'
                                accept='image/*'
                                onChange={fileChangedHandler}/>
                            <button type="submit">Submit</button>
                        </Stack>
                    </Container>
                </Box>
            </form>
        )
    }
)

