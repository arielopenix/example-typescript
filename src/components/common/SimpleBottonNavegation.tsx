import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

type SimpleBottomNavigation = {
  value: any,
  onchange: any,
  width: 500,
  options: []
}

const SimpleBottomNavigation = ({value,onchange,width}: SimpleBottomNavigation) => {
  return (
    <BottomNavigation
      value={value}
      onChange={onchange}
      showLabels
      style={{width: 500}}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};
export default SimpleBottomNavigation