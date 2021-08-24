import React from 'react'
import { AppBar, Avatar, Drawer, Hidden, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useTheme } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import FiberNewTwoToneIcon from '@material-ui/icons/FiberNewTwoTone';
import AppsIcon from '@material-ui/icons/Apps';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import {List} from "@material-ui/core"
import { useHistory, useLocation } from "react-router-dom";
import { format } from 'date-fns'


const drawerWidth = 240;

const useStyles = makeStyles((theme)=>{
    return{
        page:{
            backgroundColor:'#f4f4f4',
            width:'100%',
            minHeight:'100vh'
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
              width: drawerWidth,
              flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            backgroundColor:'#424242'
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        drawerPaper:{
            width:drawerWidth,
            backgroundColor:'#E0E0E0'
        },
        root:{
            display:'flex'
        },
        active:{
            backgroundColor:'#f4f4f4',
            color:'#304FFE'
        },
        title:{
            paddingLeft:theme.spacing(4),
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
        },
        appbar:{
            color:'black',
            backgroundColor:'white',
            width: `calc(100% - ${drawerWidth}px)`
        },
        // the heigth of the div with class toolbar is the same of toolbar
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginRight:theme.spacing(2)
        }
    }
}); 

const Layout = (props) => {

    const classes = useStyles();
    // navigate through pages
    const history = useHistory();
    // determine if we are on a specific page and add the class active
    const location = useLocation()

    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    const menuItems = [
        {
            text:'Home',
            icon: <AppsIcon/>,
            path:'/'
        },
        {
            text:'Vaccine',
            icon: <VerifiedUserTwoToneIcon />,
            path:'/vaccine'
        },
        {
            text:'News',
            icon: <FiberNewTwoToneIcon />,
            path:'/news'
        }
    ];

    const drawer = (
        <div>
            <Typography variant='h6' className={classes.title}>
                Covid Tracker App
            </Typography>
            <List>
                {/* map the array "menuItems" in order to create the lateral navbar */}
                {menuItems.map(item=>(
                    <ListItem
                        button
                        key={item.text}
                        onClick={()=> history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null }
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
        <div className={classes.root}>
            {/* app bar */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Avatar src="/covid_avatar.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
          

            {/* side drawer */}
            <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    className={classes.drawer}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}   
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
            </nav>


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {props.children}
            </div>
        </div>
    );
}
 
export default Layout;