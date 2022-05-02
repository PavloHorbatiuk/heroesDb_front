import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {Label} from "@mui/icons-material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import {ChangeEvent, useState} from "react";

interface IProps {
    label: string,
    nickname: string,
    onChangeFromInput: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}


function OnechangeHendler({label, nickname, onChangeFromInput, value}: IProps) {


    return (
        <div>
            <Stack spacing={2}>
                <TextField
                    id="filled-textarea"
                    label={label}
                    placeholder={nickname}
                    multiline
                    variant="standard"
                    onChange={onChangeFromInput}
                    value={value}
                />
            </Stack>
        </div>
    )
}


export default OnechangeHendler