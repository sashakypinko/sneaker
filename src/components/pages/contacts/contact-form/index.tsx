import {ReactElement} from 'react';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {IContact} from '../../../../services/api/contacts/dto/contact.dto';
import ContactFormContent from './contact-form-content';
import {ContactsApi} from '../../../../services/api/contacts';
import useSnackbar from '../../../custom-ui/snackbar/hooks/use-snackbar.hook';

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Это поле обязательно!'),
    email: Yup.string().email().required('Это поле обязательно!'),
    message: Yup.string().required('Это поле обязательно!'),
  });

const initialValues: IContact = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = (): ReactElement => {
  const {showSnackbar} = useSnackbar();

  const handleSubmit = async (values: IContact, {resetForm}: FormikHelpers<IContact>) => {
    try {
      await ContactsApi.send(values);
      showSnackbar('Your message sent', 'success');
      resetForm();
    } catch (e) {
      showSnackbar('Can\'t send your message!', 'error');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      <ContactFormContent/>
    </Formik>
  );
};

export default ContactForm;