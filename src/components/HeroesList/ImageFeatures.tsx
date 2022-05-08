import * as React from 'react';
import {useEffect} from "react";
import {getHero, HeroType, updateImage} from "../../store/heroesRedusers";
import {ReduxState, useAppDispatch, useAppSelector} from "../../store/state";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {ParamsType} from "./TableInfo";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {url} from "../../api/api";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {useFormik} from "formik";
import BasicAlerts from "../utils/alerts";
import Button from "@mui/material/Button";
import LoaderBackdrop from "../loader-status/BackDrom";


type FormikErrorType = {
    image?: string
}

export default function ImageFeatures() {
    const dispatch = useAppDispatch()
    const statusLodaer = useAppSelector(state => state.features.status)
    const heroData = useSelector<ReduxState, HeroType>(state => state.heroes.hero)
    const {image} = heroData
    const formik = useFormik({
        initialValues: {
            image: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.image) {
                errors.image = 'Required'
            } else if (values.image === '') {
                errors.image = 'Please load image'
            }
            return errors;
        },
        onSubmit: values => {
            const formData = new FormData();
            for (let value in values) {
                // @ts-ignore
                formData.append(value, values[value]);
            }
            dispatch(updateImage(Number(heroId.id), formData))
        }
    })

    const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        formik.setFieldValue('image', e.target!.files[0]!)
    }

    const heroId = useParams<ParamsType>()
    useEffect(() => {
        dispatch(getHero(Number(heroId.id)))
    }, []);

    return (
        <div>
            {statusLodaer === 'loading' && <LoaderBackdrop/>}
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <Container sx={{py: 8}} maxWidth="md">
                    <Stack spacing={2}>
                        <Typography variant='h3'>Edit picture</Typography>
                        <CardMedia sx={{
                            height: 250, width: 250,
                        }} component="img" image={url(image)}/>
                        <input id="image"
                               name="image"
                               type='file'
                               accept='image/*'
                               onChange={fileChangedHandler}/>
                        {formik.touched.image && formik.errors.image
                            ? <div>< BasicAlerts error={formik.errors.image}/></div>
                            : null}
                        <Button sx={{width: 250}} variant='contained' type="submit">Submit</Button>
                    </Stack>
                </Container>
            </form>
        </div>
    );
}