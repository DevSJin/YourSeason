import React from 'react';
import { Stack, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { setSnackBarOpen, setSnackbarMessage } from './snackbarSlice'
import { useDispatch, useSelector } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = () => {
  // open = true, false
  const dispatch = useDispatch()
  const { open, snackbarMessage } = useSelector(state => state.snackbar) 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackBarOpen(false));
    dispatch(setSnackbarMessage(''));
  };

  return (<>
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
    {/* <Alert severity="error">This is an error message!</Alert>
    <Alert severity="warning">This is a warning message!</Alert>
    <Alert severity="info">This is an information message!</Alert>
    <Alert severity="success">This is a success message!</Alert> */}
  </>
  );
}

export default CustomizedSnackbars 