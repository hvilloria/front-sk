import React from 'react';
import { OrderList } from '~admcomponents';
import { Sidebar } from '~admcomponents';
import styles from './styles.module.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8e0000'
    },
  },
  status: {
    danger: 'orange',
  },
});

function Home() {
  let history = useHistory();

  const handleCLick = ()=>{
    history.push('/admin/orders/new');
  }

  return(
    <ThemeProvider theme={theme}>
      <div className={styles.homeContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          className={styles.margin_top}
          >
          <Grid item md={2}>
            <Sidebar/>
          </Grid>
          <Grid item md={10} className={styles.paddingX}>
            <OrderList/>
            <IconButton className={styles.fixedBottom}>
              <AddCircleIcon
                color="primary"
                fontSize="large"
                onClick={handleCLick}
              />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}
export default Home;