import {ReactElement} from 'react';
import {Container, styled, Typography} from '@mui/material';
import Button from '../../custom-ui/button';
import {useNavigate} from 'react-router-dom';
import {RouteEnum} from '../../../routes/enums/route.enum';

const StyledContainer = styled(Container)({
  marginTop: 80,
  marginBottom: 80,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
});

const NotFoundPage = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <StyledContainer sx={{minHeight: '60vh'}} maxWidth="md">
      <Typography variant="h1" fontWeight={700}>Page not found</Typography>
      <Button variant="contained" onClick={() => navigate(RouteEnum.MAIN)}>
        Go Home
      </Button>
    </StyledContainer>
  );
};

export default NotFoundPage;