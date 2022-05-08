import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector} from "../../store/state";


export default function LoaderBackdrop() {
    const statusUpdate = useAppSelector(state=>state.heroes.update)
        return (
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={statusUpdate}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}