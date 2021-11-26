import React from 'react';
import Logo from '../../assets/ay.jpg';
import './adminDashboard.css';
import { connect } from 'react-redux';
import { logoutUser } from './../../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Header = ({ logoutUser, user }) => {
  const history = useHistory();

  return (
    <>
      <div>
        <header className='header'>
          <div className='logo-con'>
            <a href='/admindashboard' className='logo'>
              <img src={Logo} alt='' />
            </a>
            <h4> ID YOUTH CAMP 2021</h4>
          </div>
          <nav className='navbar'>
            {user.isAdmin && (
              <>
                <a href='/admindashboard'>Dashboard</a>
                <a href='/campregister-2021'>Register</a>
                <a href='/camplist'>Records</a>
              </>
            )}
            <button className='btn-logout' onClick={() => logoutUser(history)}>
              Logout
            </button>
          </nav>
        </header>
      </div>
    </>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps, { logoutUser })(Header);
