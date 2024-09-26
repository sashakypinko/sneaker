import type {ReactElement} from 'react';
import {Button as MuiButton, CircularProgress, styled, Typography} from '@mui/material';
import {ButtonProps} from '@mui/material/Button/Button';

const StyledButton = styled(MuiButton)(() => ({
  padding: '16px 28px',
  boxShadow: 'none',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 10,
}));

interface Props extends ButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({loading, startIcon, children, ...props}: Props): ReactElement => {
  return (
    <StyledButton {...props}>
      {startIcon && (
        <Typography sx={{mt: '2px', mr: 0.5}} component="span">
          {startIcon}
        </Typography>
      )}
      {loading ? <CircularProgress color="inherit" size={20}/> : children}
    </StyledButton>
  );
};

export default Button;
