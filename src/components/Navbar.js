import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '16px'
    },
    title: {
        flexGrow: 1
    },
    imagen: {
        borderRadius: '50%'
    },
    toolbar : {
        background : 'red'
    }
}));

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.toolbar}>
                <Toolbar color="warning">
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        LOG DE CORREOS ELECTRONICOS
                    </Typography>
                    <IconButton color="inherit">
                       <img src={require('../assets/img/logo.png')} width="40px" height="40px" className={classes.imagen}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;