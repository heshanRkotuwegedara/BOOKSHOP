import React, {useState} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import {NavLink} from 'react-router-dom'

export const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: "#0C090A"}} position='sticky'>
            <Toolbar>
                <Typography>
                    <StoreMallDirectoryIcon />
                    </Typography>
                    <Tabs 
                        sx = {{ml:"auto"}}
                        textColor='inherit' 
                        value ={value} 
                        onChange={(e, val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label = "Add Product"/>
                        <Tab LinkComponent={NavLink} to="/books" label = "Books"/>
                        <Tab LinkComponent={NavLink} to="/about" label = "About us"/>
                    </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
};

export default Header;


