import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ListItemLink from './ListItemBP';
import ListItemLinkCollapsed from './ListItemBPcollasped';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ShortsOutlined from '@mui/icons-material/PlayCircleOutline';
import ShortsFilled from '@mui/icons-material/PlayCircleFilled';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Yououtlined from '@mui/icons-material/AccountCircleOutlined';
import You from '@mui/icons-material/AccountCircle';
import ArrowOutlinedIcon from '@mui/icons-material/KeyboardArrowRight';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import PlaylistIcon from '@mui/icons-material/PlaylistPlay';
import YourVideoOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import YourVideoIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LikedVideosOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import LikedVideosIcon from '@mui/icons-material/ThumbUpAlt';
import TrendingOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import TrendingIcon from '@mui/icons-material/Whatshot';
import ShoppingOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingIcon from '@mui/icons-material/LocalMall';
import MusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MusicIcon from '@mui/icons-material/LibraryMusic';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import LiveOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import LiveIcon from '@mui/icons-material/Sensors';
import GamingIcon from '@mui/icons-material/VideogameAsset';
import GamingOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsIcon from '@mui/icons-material/EmojiEvents';
import CoursesOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CoursesIcon from '@mui/icons-material/School';
import FashionBeautyOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import FashionBeautyIcon from '@mui/icons-material/DryCleaning';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function Sidebar() {
  const theme = useTheme();
  const menuItems_1 = [
    { index: 'Home', text: 'Home', IconComponent: HomeOutlinedIcon, ActiveIconComponent: HomeIcon },
    { index: 'Shorts', text: 'Shorts', IconComponent: ShortsOutlined, ActiveIconComponent: ShortsFilled },
    { index: 'Subscriptions', text: 'Subscriptions', IconComponent: SubscriptionsOutlinedIcon, ActiveIconComponent: SubscriptionsIcon }
  ];

  const menuItems_2 = [
    { index: 'You', text: 'You', IconComponent: Yououtlined, ActiveIconComponent: You },
    { index: 'History', text: 'History', IconComponent: HistoryOutlinedIcon, ActiveIconComponent: HistoryIcon }
  ];
  const menuItems_2login = [
    { index: 'History', text: 'History', IconComponent: HistoryOutlinedIcon, ActiveIconComponent: HistoryIcon },
    { index: 'Playlists', text: 'Playlists', IconComponent: PlaylistIcon, ActiveIconComponent: PlaylistRoundedIcon },
    { index: 'Your videos', text: 'Your Videos', IconComponent: YourVideoOutlinedIcon, ActiveIconComponent: YourVideoIcon },
    { index: 'Watch later', text: 'Watch Later', IconComponent: WatchLaterOutlinedIcon, ActiveIconComponent: WatchLaterIcon },
    { index: 'Liked videos', text: 'Liked Videos', IconComponent: LikedVideosOutlinedIcon, ActiveIconComponent: LikedVideosIcon }
  ];

  const subscribedChannels = [
    { name: 'Fireship', icon: <img src="https://wallpaperaccess.com/full/4723250.jpg" alt="Fireship" style={{ width: 24, height: 24, borderRadius: '50%' }} /> },
    { name: 'Traversy Media', icon: <img src="https://wallpaperaccess.com/full/4723250.jpg" alt="Traversy Media" style={{ width: 24, height: 24, borderRadius: '50%' }} /> },
    // ...add more channels or fetch from API
  ];
  const menuItems_3 = subscribedChannels.map(channel => ({
    text: channel.name,
    IconComponent: () => channel.icon,
    ActiveIconComponent: () => channel.icon
  }));

  const menuItems_4 = [
    { index: 'Trending', text: 'Trending', IconComponent: TrendingOutlinedIcon, ActiveIconComponent: TrendingIcon },
    { index: 'Shopping', text: 'Shopping', IconComponent: ShoppingOutlinedIcon, ActiveIconComponent: ShoppingIcon },
    { index: 'Music', text: 'Music', IconComponent: MusicOutlinedIcon, ActiveIconComponent: MusicIcon },
    { index: 'Movies', text: 'Movies', IconComponent: MovieOutlinedIcon, ActiveIconComponent: MovieIcon },
    { index: 'Live', text: 'Live', IconComponent: LiveOutlinedIcon, ActiveIconComponent: LiveIcon },
    { index: 'Gaming', text: 'Gaming', IconComponent: GamingOutlinedIcon, ActiveIconComponent: GamingIcon },
    { index: 'News', text: 'News', IconComponent: NewspaperOutlinedIcon, ActiveIconComponent: NewspaperIcon },
    { index: 'Sports', text: 'Sports', IconComponent: SportsOutlinedIcon, ActiveIconComponent: SportsIcon },
    { index: 'Courses', text: 'Courses', IconComponent: CoursesOutlinedIcon, ActiveIconComponent: CoursesIcon },
    { index: 'FashionBeauty', text: 'Fashion & Beauty', IconComponent: FashionBeautyOutlinedIcon, ActiveIconComponent: FashionBeautyIcon },
    { index: 'Podcasts', text: 'Podcasts', IconComponent: PodcastsOutlinedIcon, ActiveIconComponent: PodcastsIcon }
  ];

  const menuItems_5 = [
    { index: 'Settings', text: 'Settings', IconComponent: SettingsOutlinedIcon, ActiveIconComponent: SettingsIcon },
    { index: 'ReportHistory', text: 'Report history', IconComponent: FlagOutlinedIcon, ActiveIconComponent: FlagIcon },
    { index: 'Help', text: 'Help', IconComponent: HelpOutlineIcon, ActiveIconComponent: HelpIcon },
    { index: 'SendFeedback', text: 'Send feedback', IconComponent: FeedbackOutlinedIcon, ActiveIconComponent: FeedbackIcon }
  ];

  const islogin = true; // Example: Replace with actual login state
  const isHamburger = false; // Example: Replace with actual state to toggle between hamburger and full sidebar

  const [isActive, setIsActive] = useState('Home');

  return (<>
    {isHamburger ? (<>
      <Box sx={{ width: 200, bgcolor: 'background.paper', height: '100vh' }}>
        <List className='list-1'>
          {menuItems_1.map((item, index) => (
            <ListItemLink
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />
          ))}
        </List>

        <List className='list-2' sx={{ borderTop: '1px solid #ccc' }}>
          {islogin ? <>
            <ListItem sx={{ paddingY: 0, paddingX: 1 }} onClick={() => setIsActive('YouLogin')}>
              <ListItemButton sx={{ borderRadius: '10px', backgroundColor: isActive === 'YouLogin' ? theme.palette.action.hover : 'inherit', '&:hover': { backgroundColor: isActive === 'YouLogin' ? '#ccc' : theme.palette.action.hover } }}>
                <ListItemText sx={{ minWidth: 20, flex: '0 0 auto'}} primary={<Typography sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>You</Typography>} />
                <ListItemIcon sx={{ minWidth:'auto', color: 'black' }}>
                  <ArrowOutlinedIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          {menuItems_2login.map((item, index) => (
            <ListItemLink
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />))}</> : menuItems_2.map((item, index) => (
              <ListItemLink
                isActive={isActive}
                handleClick={() => setIsActive(item.index)}
                mkey={item.index}
                IconComponent={item.IconComponent}
                activeIconComponent={item.ActiveIconComponent}
                text={item.text}
              />))
          }
        </List>

        <List className='list-3' sx={{ borderTop: '1px solid #ccc', paddingTop: 0 }}>
          {islogin ? (
            menuItems_3.map((item, index) => (
              <ListItemLink
                isActive={isActive}
                handleClick={() => setIsActive(`Subscription-${index}`)}
                mkey={`Subscription-${index}`}
                IconComponent={item.IconComponent}
                activeIconComponent={item.ActiveIconComponent}
                text={item.text}
              />
            ))
          ) : (
            <>
              <Typography sx={{ padding: '8px 16px', fontSize: '0.8rem', color: 'gray' }}>
                Sign in to like videos, comment, and subscribe.
              </Typography>
              <ListItem sx={{ width: '100px', mx: '20px' }} disablePadding>
                <ListItemButton
                  sx={{
                    paddingX: 0.75,
                    paddingY: 0.6,
                    color: 'blue',
                    borderRadius: '25px',
                    border: '1px solid #ccc'
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Yououtlined sx={{ color: 'blue' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography sx={{ fontSize: '0.85rem' }}>Sign in</Typography>}
                    sx={{ m: 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>

        <List className='list-4' sx={{ borderTop: '1px solid #ccc' }}>
          <Typography sx={{ padding: '8px 16px', fontSize: '0.9rem', fontWeight: 'bold' }}>Explore</Typography>
          {menuItems_4.map((item, index) => (
            <ListItemLink
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />
          ))}
        </List>

        <List className='list-5' sx={{ borderTop: '1px solid #ccc' }}>
          {menuItems_5.map((item, index) => (
            <ListItemLink
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />
          ))}
        </List>
      </Box>
    </>) : (
      <Box sx={{ width: 75, bgcolor: 'background.paper', height: '100vh' }}>

        <List className='list-collapsed'>
          {menuItems_1.map((item, index) => (
            <ListItemLinkCollapsed
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />
          ))}
          {menuItems_2.map((item, index) => (
            <ListItemLinkCollapsed
              isActive={isActive}
              handleClick={() => setIsActive(item.index)}
              mkey={item.index}
              IconComponent={item.IconComponent}
              activeIconComponent={item.ActiveIconComponent}
              text={item.text}
            />
          ))}
        </List>
      </Box>
    )}
  </>);
};