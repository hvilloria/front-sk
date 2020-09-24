import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {  withRouter, useHistory } from "react-router-dom";
import { logOut } from '../../../services/authService';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './styles.module.scss'

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

function Header (){
  let history = useHistory();
  const handleTitleCLick = () => {
    history.push("/admin");
  }

  const handleIconClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.uid) {
      logOut(user).then(()=>{
        history.push("/login");
      }).catch(()=>{
        history.push("/login");
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={`${styles.marginBottom} ${styles.appbar}`}>
        <Toolbar variant="dense">
          <Typography variant="h6" onClick={handleTitleCLick} className={styles.clickableButton}>
            Shirokuro
          </Typography>
        </Toolbar>
          <ExitToAppIcon className={styles.logoutIcon} onClick={handleIconClick}/>
      </AppBar>
    </ThemeProvider>
  )
}

export default withRouter(Header);
