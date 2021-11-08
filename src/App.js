import { StyledContainer, StyledContainerSecond } from './components/Styles';
//React Loader Spinner
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux';

import CampRegister from './pages/CampRegister';
import AdminDashboard from './pages/admin/AdminDashboard';
import CampList from './pages/CampList';
import Chart from './components/chart/Chart';

function App({ checked }) {
  return (
    <Router>
      {checked && (
        <Switch>
          <BasicRoute path='/signup/new-user'>
            <StyledContainer>
              <Signup />
            </StyledContainer>
          </BasicRoute>

          <BasicRoute path='/campregister2021'>
            <StyledContainer>
              <CampRegister />
            </StyledContainer>
          </BasicRoute>
          <AuthRoute path='/campregister-2021'>
            <StyledContainer>
              <CampRegister />
            </StyledContainer>
          </AuthRoute>
          <BasicRoute path='/login'>
            <StyledContainer>
              <Login />
            </StyledContainer>
          </BasicRoute>

          <AuthRoute path='/dashboard'>
            <StyledContainerSecond>
              <Dashboard />
            </StyledContainerSecond>
          </AuthRoute>
          <AuthRoute path='/admindashboard'>
            <AdminDashboard />
          </AuthRoute>
          <AuthRoute path='/camplist'>
            <CampList />
          </AuthRoute>

          <BasicRoute path='/'>
            <StyledContainer>
              <Home />
            </StyledContainer>
          </BasicRoute>
        </Switch>
      )}
    </Router>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});
export default connect(mapStateToProps)(App);
