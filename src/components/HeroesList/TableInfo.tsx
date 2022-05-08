import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useNavigate, useParams} from "react-router-dom";
import {ReduxState, useAppDispatch} from "../../store/state";
import {useSelector} from "react-redux";
import {getHero, HeroType} from "../../store/heroesRedusers";
import {useEffect} from "react";
import {ParamsType} from "../pop-up-window/DescriptionHero";
import {url} from "../../api/api";
import {Avatar, Paper, styled} from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function HeroTab() {
    const dispatch = useAppDispatch()
    const heroData = useSelector<ReduxState, HeroType>(state => state.heroes.hero)
    const [value, setValue] = React.useState(0);
    const {nickname, origin_description, superpowers, image, real_name, catch_phrase} = heroData
    const heroId = useParams<ParamsType>()
    useEffect(() => {
        dispatch(getHero(Number(heroId.id)))
    }, []);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <CssBaseline/>
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}>
                <Container maxWidth="md">
                    <Box sx={{width: '100%'}}>
                        <Stack direction={{xs: 'column', sm: 'row'}} spacing={1}>
                            <Avatar
                                alt="Hero picture"
                                src={url(image)}
                                sx={{width: 100, height: 100}}
                            />
                            <Typography sx={{alignItems: "center"}} variant='h4'>{nickname}</Typography>
                        </Stack>

                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="NickName" {...a11yProps(0)} />
                                <Tab label="Real Name" {...a11yProps(1)} />
                                <Tab label="Description" {...a11yProps(2)} />
                                <Tab label="Catch phrase" {...a11yProps(3)} />
                                <Tab label="Superpowers" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            {nickname}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {real_name}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {origin_description}
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            {catch_phrase}
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            {superpowers}
                        </TabPanel>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}