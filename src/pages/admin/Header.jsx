import React from 'react';
import Logo from '../../assets/ay.jpg';
import './adminDashboard.css';
import { connect } from 'react-redux';
import { logoutUser } from './../../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Header = ({ logoutUser, user }) => {
  const history = useHistory();

  return (
    <div>
      <header className='header'>
        <div className='logo-con'>
          <a href='/admindashboard' className='logo'>
            <img src={Logo} alt='' />
          </a>
          <h4> Inter-District Youth Camp 2021</h4>
        </div>
        <nav className='navbar'>
          <a href='/campregister2021'>Register</a>
          <a href='/camplist'>Campers List</a>
          <a href='#' onClick={() => logoutUser(history)}>
            Logout
          </a>
        </nav>
      </header>
    </div>
  );
};

// export default Header;

const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps, { logoutUser })(Header);
