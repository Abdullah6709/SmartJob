import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Toolbar,
  AppBar,
  styled
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "./SidebarData";

const drawerWidth = 250;

const SidebarListItem = styled(ListItemButton)(({ theme, isactive }) => ({
  borderRadius: 12,
  margin: '4px 8px',
  padding: '8px 12px',
  backgroundColor: isactive ? theme.palette.primary.light : 'transparent',
  color: isactive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    backgroundColor: isactive ? theme.palette.primary.light : 'rgba(255, 255, 255, 0.08)',
    color: isactive ? theme.palette.primary.main : '#fff',
  },
  '& .MuiListItemIcon-root': {
    color: isactive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.7)',
    minWidth: '40px'
  },
  '&:hover .MuiListItemIcon-root': {
    color: isactive ? theme.palette.primary.main : '#fff',
  }
}));

const Sidebar = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        p: 3, 
        textAlign: "center", 
        bgcolor: "#1a237e",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="h5" fontWeight="bold" color="#fff" sx={{ letterSpacing: 1 }}>
          SMART JOB
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 1 }}>
        <List>
          {sidebarItems.map((item, index) => {
            if (item.divider) {
              return (
                <Divider
                  key={`divider-${index}`}
                  sx={{ my: 1, borderColor: "rgba(255,255,255,0.1)" }}
                />
              );
            }

            const isActive = location.pathname === item.route;

            return (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <SidebarListItem
                  component={Link}
                  to={item.route}
                  isactive={isActive ? 1 : 0}
                  onClick={() => isMobile && toggleDrawer()}
                >
                  <ListItemIcon>
                    {React.cloneElement(item.icon, { fontSize: 'small' })}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400
                    }} 
                  />
                </SidebarListItem>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.2)', textAlign: 'center' }}>
        <Typography variant="caption" color="rgba(255,255,255,0.5)">
          v1.0.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: "#1a237e",
          }}
        >
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#0f172a',
            color: 'white',
            borderRight: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          p: 3,
          pt: { xs: '80px', sm: '24px' },
          minHeight: '100vh',
          backgroundColor: '#f5f7fa'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;