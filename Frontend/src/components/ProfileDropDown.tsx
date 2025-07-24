import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import GoogleIcon from '@mui/icons-material/Google';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PaidIcon from '@mui/icons-material/Paid';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';


export default function ProfileDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >  <AccountCircleSharpIcon className="text-blue-500"></AccountCircleSharpIcon> 
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
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
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <GoogleIcon sx={{ mr: 2 }}/> Google Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SwitchAccountIcon sx={{ mr: 2 }}/> Switch Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutIcon sx={{ mr: 2 }}/>Sign Out
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <SubscriptionsIcon sx={{ mr: 2 }}/>Youtube Studio
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PaidIcon sx={{ mr: 2 }}/>Purchases and memberships
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon sx={{ mr: 2 }}/>Your data in Youtube
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Brightness3Icon sx={{ mr: 2 }}/>Appearence: Light
        </MenuItem>
       <MenuItem onClick={handleClose}>
          <TranslateIcon sx={{ mr: 2 }}/>Language: British English
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AdminPanelSettingsIcon sx={{ mr: 2 }}/>Restricted Mode: Off
        </MenuItem>
         <MenuItem onClick={handleClose}>
          <LanguageIcon sx={{ mr: 2 }}/>Location: India
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <KeyboardIcon sx={{ mr: 2 }}/>Keyboard Shortcuts
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <SettingsIcon sx={{ mr: 2 }}/>Settings
        </MenuItem>
        <Divider />
         <MenuItem onClick={handleClose}>
          <HelpIcon sx={{ mr: 2 }}/>Help
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FeedbackIcon sx={{ mr: 2 }}/>Send Feedback
        </MenuItem>
      </Menu>
    </>
  );
}