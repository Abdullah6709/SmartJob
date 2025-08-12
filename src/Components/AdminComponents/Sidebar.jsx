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
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "./SidebarData";

const drawerWidth = 250;

const SidebarListItem = styled(ListItemButton)(({ theme, isactive }) => ({
  borderRadius: 10,
  margin: "4px 8px",
  padding: "10px 16px",
  backgroundColor: isactive ? "rgba(255, 255, 255, 0.15)" : "transparent",
  color: isactive ? "#fff" : "rgba(255, 255, 255, 0.7)",
  "&:hover": {
    backgroundColor: isactive
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(255, 255, 255, 0.1)",
  },
  "& .MuiListItemIcon-root": {
    color: isactive ? "#fff" : "rgba(255, 255, 255, 0.7)",
    minWidth: "40px",
  },
  "&:hover .MuiListItemIcon-root": {
    color: "#fff",
  },
}));

const Sidebar = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

const filteredSidebarItems = sidebarItems
  .filter(item => !item.divider)  
  .sort((a, b) => (a.route === "/dashboard" ? -1 : b.route === "/dashboard" ? 1 : 0));


 const drawerContent = (
  <Box
    sx={{
      mt: 8,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(195deg, #121212 0%, #1e1e1e 100%)" // Dark mode gradient
          : "linear-gradient(195deg, #1a237e 0%, #303f9f 100%)", // Light mode gradient
      color: "#fff",
    }}
  >
    <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
    <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1 }}>
      <List>
        {filteredSidebarItems.map((item, index) => {
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
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <SidebarListItem
                component={Link}
                to={item.route}
                isactive={isActive ? 1 : 0}
                onClick={() => isMobile && toggleDrawer()}
              >
                <ListItemIcon>
                  {React.cloneElement(item.icon, {
                    fontSize: "small",
                    sx: {
                      filter: isActive
                        ? "drop-shadow(0 1px 1px rgba(0,0,0,0.2))"
                        : "none",
                      color: isActive
                        ? "#fff"
                        : theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.7)",
                    },
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: "0.2px",
                  }}
                />
              </SidebarListItem>
            </ListItem>
          );
        })}
      </List>
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
            background: "linear-gradient(135deg, #3f51b5 0%, #283593 100%)",
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
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 600 }}
            >
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
            boxSizing: "border-box",
            borderRight: "none",
            overflowX: "hidden",
          },
        }}
      >
        {drawerContent}
      </Drawer>

     
    </Box>
  );
};

export default Sidebar;