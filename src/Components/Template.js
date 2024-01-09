import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        width: '100px',
        height: '100px',
        border: '1px solid #000000',
    },
});

const Template = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>Template</div>
    )
}

export default Template