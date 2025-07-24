import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ListItemLink(props:any) {
  const theme = useTheme();
  return (
    <div onClick={props.onclick}>
    <ListItem sx={{paddingY: 0, paddingX:0.5}} onClick={props.handleClick}>
      <ListItemButton sx={{flexDirection: 'column', alignItems:'center', borderRadius:'10px', backgroundColor: props.isActive===props.mkey ? theme.palette.action.hover : 'inherit', '&:hover': {backgroundColor: props.isActive===props.mkey ? '#ccc':theme.palette.action.hover} }}>
        <ListItemIcon sx={{ minWidth: 'auto', color: 'black'}}>
          {props.isActive===props.mkey ? <props.activeIconComponent /> : <props.IconComponent />}
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ fontSize: '0.6rem' }}>{props.text}</Typography>} />
      </ListItemButton>
    </ListItem>
    </div>
  );
};