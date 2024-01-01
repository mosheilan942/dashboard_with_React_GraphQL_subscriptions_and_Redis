import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

import { DetailsCard } from "../component/DetailsCard";
import Stages  from "../component/Stages";

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function ShowProcess() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop:10 }}>
      <Grid container spacing={1}>
        <Grid  xs={8} height={3}>
          <Item><DetailsCard/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Stages/></Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShowProcess