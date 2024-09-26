import type {ReactElement} from 'react';
import {styled, TextField as MuiTextField} from '@mui/material';
import {useField} from 'formik';
import {BaseTextFieldProps} from '@mui/material/TextField/TextField';

const StyledTextField = styled(MuiTextField)(({theme}) => ({
  '& .MuiInputBase-root': {
    borderRadius: '10px',
    background: '#FAFAFA',

    '& fieldset': {
      border: 'none',
    },

    '& input': {
      padding: 24,
    },
  },
}));

interface Props extends BaseTextFieldProps {
  name: string;
}

const TextField = ({name, ...props}: Props): ReactElement => {
  const [field, meta] = useField<string>(name);

  return (
    <StyledTextField
      {...props}
      name={name}
      value={field.value}
      helperText={meta.error && meta.touched ? meta.error : ' '}
      error={!!(meta.error && meta.touched)}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  );
};

export default TextField;