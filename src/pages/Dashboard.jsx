import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledTitle,
  ExtraText,
  MyAvatar,
  StyledButton,
  ButtonGroup,
  StyledFormWrapper,
  colors,
  TopbarStyled,
  TopLeft,
  TopRight,
  BottomStyled,
  CopyrightText,
  TopRightIcons,
  TopbarIconContainer,
  TopAvatar,
  TopIconBadge,
} from '../components/Styles';
import Logo from './../assets/Logo.png';
import ProfileAvater from './../assets/major.jpg';
import { connect } from 'react-redux';
import { logoutUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';
import { NotificationsNone, Settings, ExitToApp } from '@material-ui/icons';

//Material UI
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

const Dashboard = ({ logoutUser, user }) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TopbarStyled>
        <TopRight>
          <MyAvatar image={Logo} />
        </TopRight>
        <TopLeft>
          <TopRightIcons>
            <TopbarIconContainer>
              <NotificationsNone style={{ height: '1.5em' }} />
              <TopIconBadge>0</TopIconBadge>
            </TopbarIconContainer>

            <Tooltip title='Account settings'>
              <TopAvatar src={ProfileAvater} alt='' onClick={handleClick} />
            </Tooltip>
          </TopRightIcons>
        </TopLeft>
      </TopbarStyled>
      <BottomStyled>
        <StyledFormWrapper bg={colors.dark1}>
          <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
          <ExtraText color={colors.light1}>{user.email}</ExtraText>
          <ButtonGroup>
            <StyledButton to='#' onClick={() => logoutUser(history)}>
              Logout
            </StyledButton>
          </ButtonGroup>
        </StyledFormWrapper>
      </BottomStyled>
      <div style={{ height: '10%', overflow: 'hidden' }}>
        <CopyrightText>All rights reserved &copy;2021</CopyrightText>
      </div>

      {/* Popup Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        /*    PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 12,
              height: 12,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} */
      >
        <MenuItem component={Link} to='/profile'>
          <Avatar
            style={{ height: '22px', width: '22px', marginRight: '10px' }}
          />
          Profile
        </MenuItem>
        <MenuItem>
          <Avatar
            style={{ height: '22px', width: '22px', marginRight: '10px' }}
          />
          My account
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => logoutUser(history)}>
          <ListItemIcon>
            <ExitToApp fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
const mapStateToProps = ({ session }) => ({
  user: session.user,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
