import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {

    return (
        <AppBar position="static" style={{ backgroundColor: '#333' }}>
            <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                KTPC 
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;