import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardAltSharpIcon from '@mui/icons-material/KeyboardAltSharp';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function Temp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
                   <button onClick={handleClick}>
                 <MoreVertIcon
                className="mx-3 text-gray-400 cursor-pointer"
                titleAccess="Settings"
                
              ></MoreVertIcon>
              </button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'demo-customized-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
         <PersonPinSharpIcon/>
         Your data in YouTube
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
         <BedtimeOutlinedIcon/>
         Appearance:Device theme
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
         <TranslateOutlinedIcon/>
         Language:English
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <AdminPanelSettingsOutlinedIcon></AdminPanelSettingsOutlinedIcon>
          Restricted Mode:Off
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <LanguageIcon></LanguageIcon>
          Location:India
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
         <KeyboardAltSharpIcon/>
          keyboard shortcuts
        </MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose} disableRipple>
          <SettingsApplicationsSharpIcon/>
         Settings
        </MenuItem>
        <hr/>
        <MenuItem onClick={handleClose} disableRipple>
          <HelpOutlineSharpIcon/>
         Help
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
         <FeedbackSharpIcon/>
         Send feedback
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
