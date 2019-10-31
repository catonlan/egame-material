import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import Whatshot from '@material-ui/icons/Whatshot';
import Info from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue, ] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.root}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      value={value}
    >
      <BottomNavigationAction icon={<Home />}
        label="首页"
      />
      <BottomNavigationAction icon={<EmojiEvents />}
        label="赛事"
      />
      <BottomNavigationAction icon={<Whatshot />}
        label="竞猜"
      />
      <BottomNavigationAction icon={<Info />}
        label="资讯"
      />
    </BottomNavigation>
  );
}
