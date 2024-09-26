import {ReactElement, ReactNode} from 'react';
import {IconButton as MuiIconButton, CircularProgress, styled} from '@mui/material';
import {ButtonProps} from '@mui/material/Button/Button';

const StyledIconButton = styled(MuiIconButton)(({theme}) => ({
  border: '1px solid',
  borderColor: theme.palette.secondary.main,

  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.text.secondary,
  },
}));

interface Props extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
}

const IconButton = ({loading, children, disabled, ...props}: Props): ReactElement => {
  return (
    <StyledIconButton {...props} disabled={loading || disabled}>
      {loading ? <CircularProgress size={24}/> : children}
    </StyledIconButton>
  );
};

export default IconButton;
