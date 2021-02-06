import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    
  },
  container: {
      textAlign: 'center',
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div className={classes.container} id="impressum">
      <span className={classes.container}>Impressum/Imprint</span>
    </div>
  );
}
