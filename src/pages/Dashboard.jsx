import React from 'react';
import {
  StyledTitle,
  ExtraText,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormWrapper,
  colors,
} from '../components/Styles';
import Logo from './../assets/Logo.png';
import { connect } from 'react-redux';
import { logoutUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Dashboard = ({ logoutUser, user }) => {
  const history = useHistory();

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          width: '100%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormWrapper bg={colors.dark1}>
        <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
        <ExtraText color={colors.light1}>{user.email}</ExtraText>
        <ButtonGroup>
          <StyledButton to='#' onClick={() => logoutUser(history)}>
            Logout
          </StyledButton>
        </ButtonGroup>
      </StyledFormWrapper>
    </div>
  );
};
const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
