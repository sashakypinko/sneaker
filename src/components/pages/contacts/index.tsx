import {ReactElement} from 'react';
import PageContainer from '../../custom-ui/page-container';
import {Box, Grid, styled, Typography, useTheme} from '@mui/material';
import ContactForm from './contact-form';

const LinksCard = styled(Box)({
  padding: 18,
  background: '#FAFAFA',
  borderRadius: 10,
});

const ContactsPage = (): ReactElement => {
  const theme = useTheme();

  return (
    <PageContainer
      title="Контакты"
    >
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography fontSize={18} color={theme.palette.text.disabled}>
            • 8 800 000 00 00
            <br/>
            • emailexample@email.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <ContactForm/>
        </Grid>
        <Grid item xs={12} md={5}>
          <LinksCard>
            <Typography variant="h6" align="center" color={theme.palette.text.disabled}>
              Найдите нас:
            </Typography>
            <Box display="flex" justifyContent="space-between" padding={7} gap={2}>
              <img src={require('../../../assets/img/snapchat.png')} alt="snapchat_icon"/>
              <img src={require('../../../assets/img/facebook.png')} alt="facebook_icon"/>
              <img src={require('../../../assets/img/x.png')} alt="x_icon"/>
            </Box>
          </LinksCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ContactsPage;