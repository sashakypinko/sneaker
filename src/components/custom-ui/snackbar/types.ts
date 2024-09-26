export interface SnackbarContextProps {
  showSnackbar: (message: string, severity?: 'success' | 'error' | 'warning' | 'info') => void;
}