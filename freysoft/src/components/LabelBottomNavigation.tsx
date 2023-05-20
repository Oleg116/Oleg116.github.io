import * as React from 'react';

import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const styles = {
  round: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#FF643B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.MouseEventHandler<HTMLAnchorElement>, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <BottomNavigation sx={{ width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }} value={value}>
      <Link to="/home" onClick={() => setValue('home')}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeRoundedIcon sx={{ color: value === 'home' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/expenses" onClick={() => setValue('expenses')}>
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<CreditCardRoundedIcon sx={{ color: value === 'expenses' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/add" onClick={() => setValue('add')}>
        <BottomNavigationAction
          label="add"
          value="Add"
          icon={<Box sx={styles.round}><AddOutlinedIcon sx={{ color: '#fff' }} /></Box>}
        />
      </Link>
      <Link to="/calendar" onClick={() => setValue('calendar')}>
        <BottomNavigationAction
          label="Calendar"
          value="calendar"
          icon={<CalendarTodayOutlinedIcon sx={{ color: value === 'calendar' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/setting" onClick={() => setValue('setting')}>
        <BottomNavigationAction
          label="Setting"
          value="setting"
          icon={<SettingsOutlinedIcon sx={{ color: value === 'setting' ? '#FF643B' : '#A3A3A3' }} />} />
      </Link>
    </BottomNavigation>
  )
};
