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
export default function LabelBottomNavigation(
  { tabValue, setTabValue }: { tabValue: string, setTabValue: (newTab: string) => void }
) {
  return (
    <BottomNavigation sx={{ position: 'fixed', bottom: '0', height: 56, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} value={tabValue}>
      <Link to="" onClick={() => setTabValue('')}>
        <BottomNavigationAction
          sx={{ p: 2, minWidth: 0 }}
          label="Home"
          value="home"
          icon={<HomeRoundedIcon sx={{ color: tabValue === '' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/expenses" onClick={() => setTabValue('expenses')}>
        <BottomNavigationAction
          sx={{ p: 0, minWidth: 0 }}
          label="Favorites"
          value="favorites"
          icon={<CreditCardRoundedIcon sx={{ color: tabValue === 'expenses' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/add" onClick={() => setTabValue('add')}>
        <BottomNavigationAction
          sx={{ p: 0, minWidth: 0 }}
          label="add"
          value="Add"
          icon={<Box sx={styles.round}><AddOutlinedIcon sx={{ color: '#fff' }} /></Box>}
        />
      </Link>
      <Link to="/calendar" onClick={() => setTabValue('calendar')}>
        <BottomNavigationAction
          sx={{ p: 0, minWidth: 0 }}
          label="Calendar"
          value="calendar"
          icon={<CalendarTodayOutlinedIcon sx={{ color: tabValue === 'calendar' ? '#FF643B' : '#A3A3A3' }} />}
        />
      </Link>
      <Link to="/setting" onClick={() => setTabValue('setting')}>
        <BottomNavigationAction
          sx={{ p: 2, minWidth: 0 }}
          label="Setting"
          value="setting"
          icon={<SettingsOutlinedIcon sx={{ color: tabValue === 'setting' ? '#FF643B' : '#A3A3A3' }} />} />
      </Link>
    </BottomNavigation>
  )
};
