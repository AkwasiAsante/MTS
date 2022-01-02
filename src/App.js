import { StyledContainer } from './components/Styles';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux';

import CampRegister from './pages/CampRegister';
import AdminDashboard from './pages/admin/AdminDashboard';
import CampList from './pages/CampList';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Tags from './components/tag/Tags';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function App({ checked }) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {checked && (
          <Switch>
            <BasicRoute path='/signup/new-user'>
              <StyledContainer>
                <Signup />
              </StyledContainer>
            </BasicRoute>

            <BasicRoute path='/campregister2021end'>
              <StyledContainer>
                <CampRegister />
              </StyledContainer>
            </BasicRoute>
            <AuthRoute path='/campregister-2021end'>
              <StyledContainer>
                <CampRegister />
              </StyledContainer>
            </AuthRoute>
            <BasicRoute path='/login'>
              <StyledContainer>
                <Login />
              </StyledContainer>
            </BasicRoute>
            {/* <AuthRoute path='/trycamp'>
            <Records />
          </AuthRoute> */}

            <AuthRoute path='/admindashboard'>
              <AdminDashboard />
            </AuthRoute>
            <AuthRoute path='/camplist'>
              <CampList />
            </AuthRoute>
            <AuthRoute path='/tags'>
              <Tags />
            </AuthRoute>

            <BasicRoute path='/'>
              <StyledContainer>
                <Home />
              </StyledContainer>
            </BasicRoute>
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});
export default connect(mapStateToProps)(App);
