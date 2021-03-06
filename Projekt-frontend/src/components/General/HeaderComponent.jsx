import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withRouter, Link } from 'react-router-dom'
import LoginDialogComponent from '../UserManagement/LoginDialogComponent'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Fade from '@material-ui/core/Fade';

import HeaderDrawerComponent from './HeaderDrawerComponent';
import { withTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@material-ui/core';

class HeaderComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginShowing: false,
      loggedIn: window.sessionStorage.getItem("user"),
      isDrawerOpen: false,
      isRegisterAndLoginShowing: false,
      regLogAnchorEl: null
    };
  }

  handleLoginDialogClickOpen = () => {
    this.setState({ loginShowing: true });
  };

  handleLoginDialogClickClose = () => {
    this.setState({ loginShowing: false });
  };

  log_in_successful = () => {
    this.setState({
      loggedIn: window.sessionStorage.getItem("user"),
      loginShowing: false
    });
    this.navigatePageAfterLogIn();
  };

  navigateRegister() {
    this.props.history.push('/register');
  }

  navigatePageAfterLogIn() {
    this.props.history.push("/overview");
    window.location.reload()
  }

  changeDrawerStatus = (status) => {
    this.setState({ isDrawerOpen: status })

  }

  toggleDrawer = status => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ isDrawerOpen: status })
  }

  toggleRegisterAndLogin = (event) => {
    this.setState({isRegisterAndLoginShowing: !this.state.isRegisterAndLoginShowing,
      regLogAnchorEl: event.currentTarget})
  }

  render() {
    const { loggedIn } = this.state;
    var logo = require('../../images/etermin3.PNG')

    return (
      <div className="header-root">
        <header>
          <AppBar className="header-appbar">
            <Toolbar className="header-toolbar">
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                aria-label="open drawer"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <img src={logo} style={{ "height": "60px", "padding": "5px" }} />
              </Link>
              <Typography className="title" variant="h4" noWrap>
                <Link to="/">
                  e-Termin
                </Link>
              </Typography>
              {!loggedIn ?
                <div>
                  <IconButton aria-label="user-data" color="primary" onClick={(e) => {
                    this.toggleRegisterAndLogin(e)
                  }}>
                    <PersonIcon style={{ color: "#ffffff", fontSize: 30 }} />
                  </IconButton>
                  <Menu open={this.state.isRegisterAndLoginShowing} onClose={this.toggleRegisterAndLogin} TransitionComponent={Fade}
                  anchorEl={this.state.regLogAnchorEl}
                  keepMounted>
                    <MenuItem color="inherit" onClick={(e) => {
                      this.handleLoginDialogClickOpen();
                      this.toggleRegisterAndLogin(e);
                    }}>{this.props.t("userManagement.logIn")}</MenuItem>
                    <MenuItem color="inherit" onClick={(e) => {
                      this.navigateRegister();
                      this.toggleRegisterAndLogin(e);
                    }}>{this.props.t("userManagement.register")}</MenuItem>
                  </Menu>
                </div>
                :
                <div>
                  <Button color="inherit" onClick={() => {
                    window.sessionStorage.removeItem("user");
                    // this.setState({ loggedIn: !loggedIn });
                    this.props.history.push("/");
                    window.location.reload();
                    // window.location = initialHref;
                  }}>{this.props.t("userManagement.logOut")}</Button>
                </div>
              }
            </Toolbar>
          </AppBar>
        </header>
        <HeaderDrawerComponent loggedIn={this.state.loggedIn} changeDrawerStatus={this.changeDrawerStatus} toggleDrawer={this.toggleDrawer} isDrawerOpen={this.state.isDrawerOpen} />

        <LoginDialogComponent handleLoginDialogClickClose={this.handleLoginDialogClickClose} isShowing={this.state.loginShowing} logInSuccessful={this.log_in_successful} />
      </div>
      // const { loggedIn } = this.state;
      // var initialHref = window.location.href;
      // return (
      //     <div>
      //         <header>
      //             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      //                 <div><a href="./" className="navbar-brand">e-Termin</a></div>
      //                 {loggedIn
      //                     ? <Button style={{ marginLeft: "10px" }}
      //                         onClick={() => {
      //                             window.sessionStorage.removeItem("user");
      //                             this.setState({ loggedIn: !loggedIn });
      //                             window.location = initialHref;
      //                         }} variant="contained" color="primary">
      //                         Log out
      //                     </Button>
      //                     : <div>
      //                         <Button style={{ marginLeft: "10px" }} onClick={() => {
      //                             this.handleLoginDialogClickOpen()
      //                         }} variant="contained" color="primary">Log in</Button>

      //                         <Button style={{ marginLeft: "10px" }} onClick={() => {
      //                             this.navigateRegister();
      //                         }} variant="contained" color="secondary">Register</Button>

      //                         <LoginDialogComponent handleLoginDialogClickClose={this.handleLoginDialogClickClose} isShowing={this.state.loginShowing} logInSuccessful={this.log_in_successful} />
      //                     </div>
      //                 }

      //             </nav>
      //         </header>
      //     </div>
    )
  }
}

export default withRouter(withTranslation()(HeaderComponent))
