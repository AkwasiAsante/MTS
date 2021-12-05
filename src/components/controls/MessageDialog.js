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
  const { formType, isDel } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    setMessageDialog({ ...messageDialog, isOpen: false });
    console.log(isDel);
    //  window.parent.location = window.parent.location.href;
    if (formType === 1) {
      window.location.href = '/';
    } else if (formType === 2 && isDel === false) {
      window.location.href = 'camplist';
    }
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
