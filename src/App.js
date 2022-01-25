import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Map from './components/Map/Map';

const App = () => {
  return (
    <>
      <CssBaseline />
      
      <Grid container spacing={3} style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} md={12}>
          <Map />
        </Grid>
      </Grid>
      
    </>
  );
}

export default App;