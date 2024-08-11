import React, { Fragment } from "react";
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    border: "1px solid #ddd",
    textAlign: "center"
  },
});

export default () => {
  const classes = useStyles();
  const reload = () => {
    window.location.reload();
  };
  return (
    <Fragment>
      <Typography variant='h5' className={classes.title}>
        Congratulation! You completed registration process.
      </Typography>
      <Button variant='contained' color='primary' onClick={reload}>
        Reload
      </Button>
    </Fragment>
  );
};
