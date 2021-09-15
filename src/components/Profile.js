import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
        // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Profile() {

  return (
    <p>Profile</p>
  );
}
