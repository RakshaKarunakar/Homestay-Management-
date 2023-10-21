import React from 'react';
import '../HomePage.css';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Drawer, Toolbar, CssBaseline, Divider, IconButton, Typography, Button } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, LinearProgress, ImageListItem } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  paddingTop: theme.spacing(3),
  color: 'black',
  background: 'white',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function HSHome() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //to connect home page contents
  const welcomeSectionRef = React.useRef(null);
  const gallerySectionRef = React.useRef(null);
  const facilitiesSectionRef = React.useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itemData = [
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipOOJ3itSyberpuqVhGCeGTk9EMgV1zl0hM150Wb=w768-h768-n-o-v1",
      title: 'Listing 1',
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipM1qfTFFkCoy2Ofv34icvgjD8S263iVL0BlW2Se=w768-h768-n-o-v1",
      title: 'Listing 2',
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipNTLtcDsrD819RLSrF3ujPzZqI3oVfP_fxeVxhT=w768-h768-n-o-v1",
      title: 'Listing 3',
    },
    {
      img: "https://lh3.googleusercontent.com/pbZ8NWQIJ-xqE9MCLXVbzLuPLzy-JcOkYxsfUKnLkurhLpH6vtoXsOK9a22ui59zLGvfK23du4bJndJg=w768-h768-n-o-v1",
      title: 'Listing 4',
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipM03Xk_DLJ3uyHUd5cgzvEaAAo-Nyc1y-AHUaTJ=w960-h960-n-o-v1",
      title: 'Listing 5',
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipOTc-Ba07SmOIXBpKICGNyWStwy7UIUmWOoyzyA=w960-h960-n-o-v1",
      title: 'Listing 6',
    },
    {
      img: "https://i.pinimg.com/originals/dd/40/fe/dd40fed5745000f152f3f95f77587fef.jpg",
      title: 'Listing 7',
    },
    {
      img: "https://images.otstatic.com/prod/26263070/2/large.jpg",
      title: 'Listing 8',
    },
    {
      img: "https://pokiesnearme.net.au/cthumb?t=pi&id=31409&w=800&h=800",
      title: 'Listing 9',
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipMcp5uHC4cGYq8U9E6r2ioR9H5WBTwUhshiOvVb=w960-h960-n-o-v1",
      title: 'Listing 10',
    }
  ];


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* Headwer Section */}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <div class="content" >
              <img src="https://th.bing.com/th/id/OIP.I5z2kYpjxv-ZEVEzSZUwtAAAAA?pid=ImgDet&w=200&h=153&c=7&dpr=1.3" alt="" class="rounded-image" />
              <div className="text" >
                <h2 style={{ color: 'purple', fontStyle: 'Bold' }}>SUNSET HOMESTAY </h2>
                <LinearProgress color="secondary" />
              </div>
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ mr: 0, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        <Main open={open}>
          <DrawerHeader />

          {/*welcome Card */}
          <Typography paragraph ref={welcomeSectionRef}>
            <div className="Welcome-card" >
              <div style={{ color: 'purple', fontStyle: 'Bold' }}>
                <img src="https://cdn-icons-png.flaticon.com/128/8813/8813113.png" alt="" />
                <h1 style={{ fontSize: '35px' }}>Sunset Udupi homestay</h1>
                <h1 style={{ fontSize: '30px' }}>Beach House Sunset Udupi homestay</h1>
                <h5 style={{ fontSize: '25px' }}>A stunning beach house in Udupi! (at Hoode, Close to Malpe beach) Open 24 hours</h5>
              </div>
              <div style={{ height: '10px' }} />
              <div>
                <img src="https://www.homestayadvisor.in/uploads/2/1/7/1/21711386/paradise-isle-beach-resort-27_orig.jpg"
                  alt="" className="listing-image" />
              </div>
              <div style={{ height: '20px' }} />
              <div style={{ /*color: 'black',*/ fontStyle: 'bold' }}>
                <h2 style={{ fontSize: '25px' }}>UDUPI HOMESTAY: SUNSET BEACH HOUSE</h2>
                <h5>Welcome to the Sunset beach house! It is situated 8 kms from Udupi and 4 kms from Malpe.</h5>
                <h5>It is the perfect place to stay for your adventure.</h5>
                <h5>Sunset beach house is a private villa/homestay with a private beach and an infinity pool giving you a panoramic view of the ocean.</h5>
                <h5>There are caretakers 24/7 who can cook special local delicacies or you can always order food from local restaurants around the area.</h5>
                <h5>Call us to check for availability!</h5><br />
              </div>
            </div>
          </Typography> 

          {/* Snap shots section */}
          <Typography paragraph ref={gallerySectionRef}>
            <div>
              <div className="snapshots">
                <h2 style={{ textAlign: 'center', color: 'purple', fontStyle: 'Bold', border: '3px solid purple' }} >SNAPSHOTS</h2>
                <div className="featured-listings">
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} className="featured-card">
                      <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        className="featured-image"
                      />
                    </ImageListItem>
                  ))}
                </div>
              </div></div>
          </Typography>
          
          {/* Facilities section */}
          <Typography paragraph ref={facilitiesSectionRef}>
            <div className="facilities">
              <h2 style={{ textAlign: 'center', color: 'purple', fontStyle: 'Bold', border: '3px solid' }} className='text'  >FACILITIES</h2>
              <div className="facilities-listings">
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/11295/11295462.png" alt="" className="facility-images" />
                  PARKING</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/10567/10567904.png" alt="" className="facility-images" />
                  WAITING LOUNGE</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/10161/10161899.png" alt="" className="facility-images" />
                  WIF FI FACILITY</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/11619/11619079.png" alt="" className="facility-images" />
                  TRAVEL DESK</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/9349/9349740.png" alt="" className="facility-images" />
                  SWIMMING POOL</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/9368/9368121.png" alt="" className="facility-images" />
                  AIR COOLER</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/12067/12067818.png" alt="" className="facility-images" />
                  WATER ACTIVITIES</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/7985/7985822.png" alt="" className="facility-images" />
                  FOOD SERVICES</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/8050/8050022.png" alt="" className="facility-images" />
                  WOORK SPACE</h5>
                <h5 className="facilities-card">
                  <img src="https://cdn-icons-png.flaticon.com/128/11620/11620022.png" alt="" className="facility-images" />
                  LAUNDRY SERVICE</h5>
              </div>
            </div>
          </Typography>

          {/* className="footer-listings" */}
          <Typography>
            <LinearProgress color="secondary" />
            <div style={{ textAlign: 'center', color: 'purple', border: '3px solid' }} className='footer-listings'>
              <div className="footer-card">
                {(<CallIcon />)}<h3>Contact Us</h3>
                <h5>0123456789</h5>
              </div>

              <div className="footer-card">
                {(<LocationOnIcon />)}
                <h3>Address</h3>
                <h5>Sunset home stay-Malpe road </h5>
                <h5> Karnataka 576115 India</h5>
              </div>

              <div className="footer-card">
                {(<WorkHistoryIcon />)}
                <h3>Bussiness Hours</h3>
                <h5>Monday - Sunday</h5>
                <h5>Open 24 hours</h5>
              </div>
            </div>
            <LinearProgress color="secondary" />
            <div style={{ height: '5px' }} />
          </Typography>
          
          <div>
            <Link to='/RoomForm'> <Button type='button' variant="non contained" size='small' style={{ marginRight: '10px' }}> {/*RoomForm */} </Button > </Link>
          </div>

        </Main>
      </Box>

      {/*Drawer section */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['HOME', 'SNAPSHOTS', 'FACILITIES'].map((text, index) => (
            <ListItem key={text} disablePadding
              onClick={() => {
                if (index === 0) {
                  scrollToSection(welcomeSectionRef);
                } else if (index === 1) {
                  scrollToSection(gallerySectionRef);
                } else if (index === 2) {
                  scrollToSection(facilitiesSectionRef);
                }
                handleDrawerClose();
              }}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? (<HomeIcon />
                  ) : index % 3 === 1 ? (<ImageIcon />
                  ) : (<InfoIcon />)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <LinearProgress color="info" /> */}
        <List>
          <div ><ListItemIcon><AccountCircleIcon /></ListItemIcon>ADMIN PANEL</div> <IconButton onClick={handleDrawerClose} ></IconButton><Divider />
          {['ROOMS_BOOKING','REGISTER_DATA'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index % 3 === 0 ? (<NoteAddIcon />): index % 3 === 1 ? (<TextSnippetIcon />)
                    : (<NoteAddIcon />)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    </Box>
  );
}
