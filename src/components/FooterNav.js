import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShowChartTwoToneIcon from '@material-ui/icons/ShowChartTwoTone';
import PublicIcon from '@material-ui/icons/Public';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles({
  root: {
    bottom:0,
    position:'absolute',
    left:0,
    right:0
  }
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();
  //const [value, setValue] = React.useState(0);
  console.log(screenConfig[0])

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<PublicIcon />} />
      <BottomNavigationAction label="Stats by Country" icon={<SortIcon />} />
      <BottomNavigationAction label="Graph Charts" icon={<ShowChartTwoToneIcon />} />
    </BottomNavigation>
  );
}