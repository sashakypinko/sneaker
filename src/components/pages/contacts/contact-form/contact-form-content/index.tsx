import {ReactElement} from 'react';
import {Form, useFormikContext} from 'formik';
import {Grid} from '@mui/material';
import {IContact} from '../../../../../services/api/contacts/dto/contact.dto';
import TextField from '../../../../custom-ui/text-field';
import Button from '../../../../custom-ui/button';

const ContactForm = (): ReactElement => {
  const {isSubmitting} = useFormikContext<IContact>();
  
  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField placeholder="Ваш email" name="email" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField placeholder="Ваше имя" name="name" fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField placeholder="Введите сообщение" name="message" rows={5} multiline fullWidth/>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="end">
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default ContactForm;