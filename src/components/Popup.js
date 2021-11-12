import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    paddingRight: '2px',
    marginBottom: '-10px',
  },
  btn: {
    right: 10,
    top: 0,
    bottom: 5,
    width: 40,
    height: 40,
  },
}));
export default function Popup(props) {
  const { title, children, openPop, setOpenPop } = props;

  const classes = useStyles();

  return (
    <Dialog open={openPop}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <IconButton
            aria-label='close'
            onClick={() => setOpenPop(false)}
            className={classes.btn}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
