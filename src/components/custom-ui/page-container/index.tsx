import type {ReactElement, ReactNode} from 'react';
import {Container, Divider, Typography} from '@mui/material';

interface Props {
  title: string;
  topContent?: ReactNode;
  children: ReactNode;
}

const PageContainer = ({title, topContent, children}: Props): ReactElement => {
  return (
    <Container sx={{mt: 4, minHeight: '75vh'}} maxWidth="xl">
      {topContent}
      <Typography sx={{mt: 6}} variant="h4">{title}</Typography>
      <Divider sx={{mt: 6, mb: 6}}/>
      {children}
    </Container>
  );
};

export default PageContainer;
