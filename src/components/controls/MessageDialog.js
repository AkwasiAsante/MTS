import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import Controls from './Controls';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  dialog: {
    // padding: theme.spacing(2),
    // position: 'absolute',
    // top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: 'center',
  },
  dialogContent: {
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
  },
  titleIcon: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '5rem',
      fill: 'blue',
    },
  },
}));

const MessageDialog = (props) => {
  const { messageDialog, setMessageDialog } = props;
  const { formType } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    // console.log(formType);
    setMessageDialog({ ...messageDialog, isOpen: false });

    history.push('/');
    // if (formType === 1) {
    //   history.push('admindashboard');
    //   console.log('inhere 1');
    // } else if (formType === 2) {
    //   history.push('www.google.com');
    //   console.log('inhere 2');
    // } else {
    //   history.push('/');
    //   console.log('inhere');
    // }
  };

  return (
    <>
      <Dialog open={messageDialog.isOpen} classes={{ paper: classes.dialog }}>
        <DialogTitle className={classes.dialogTitle}>
          <IconButton disableRipple className={classes.titleIcon}>
            <ThumbUp />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography variant='h6'>{messageDialog.title}</Typography>
          <Typography variant='subtitle2'>{messageDialog.subTitle}</Typography>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Controls.Button text='OK' color='default' onClick={handleClose} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MessageDialog;
