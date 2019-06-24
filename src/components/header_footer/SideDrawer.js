import React from 'react';

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({open, onClose}) => {
    return(
        <Drawer anchor="right" open={open} onClose={() => onClose(false)} >
            <List component="nav">

            </List>
        </Drawer>
    );
}

export default SideDrawer;
