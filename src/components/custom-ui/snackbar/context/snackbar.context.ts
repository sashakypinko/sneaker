import {createContext} from 'react';
import {SnackbarContextProps} from '../types';

const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => {},
});

export default SnackbarContext;
