import {ReactElement, ReactNode, useState} from 'react';
import SnackbarContext from './context/snackbar.context';
import {Alert, Snackbar, SnackbarOrigin} from '@mui/material';
import {AlertColor} from '@mui/material/Alert/Alert';

interface Props {
  children: ReactNode;
}

const SnackbarProvider = ({children}: Props): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('info');

  const showSnackbar = (msg: string, sev: AlertColor = 'info') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{showSnackbar}}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'} as SnackbarOrigin}
      >
        <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;