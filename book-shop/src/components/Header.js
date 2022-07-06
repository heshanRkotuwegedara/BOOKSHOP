import React from 'react'
import {AppBar, Tabs, Toolbar, Typography} from '@mui/material';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

export const Header = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <StoreMallDirectoryIcon />
                    </Typography>
                    <Tabs>
                        <Tab label = "Add Product"/>
                        <Tab label = "About us"/>
                    </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
};

export default Header;


