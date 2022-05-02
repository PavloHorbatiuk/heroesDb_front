import {TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
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