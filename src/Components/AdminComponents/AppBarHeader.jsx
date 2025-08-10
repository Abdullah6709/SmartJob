import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
  Badge,
  Avatar,
  styled,
  Divider
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    handleMenuClose();
    navigate("/login");
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: "#1a237e", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ 
        justifyContent: "space-between", 
        padding: "0 24px",
        minHeight: "64px"
      }}> 
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
          Admin Dashboard
        </Typography>
        
        <Box display="flex" alignItems="center" gap={3}>
          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 2,
              width: 300,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgba(0,0,0,0.2)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Icon Buttons */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton color="inherit" size="large" sx={{ position: 'relative' }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" size="large" sx={{ position: 'relative' }}>
              <Badge badgeContent={3} color="error">
                <ListAltIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" size="large" sx={{ position: 'relative' }}>
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Box display="flex" alignItems="center" sx={{ ml: 1 }}>
              <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar 
                    alt="Admin User" 
                    src="/static/images/avatar/1.jpg" 
                    sx={{ width: 36, height: 36 }}
                  />
                </StyledBadge>
                <Typography variant="subtitle2" sx={{ ml: 1, color: "#fff" }}>
                  Admin
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#fff" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <AccountCircle sx={{ mr: 1 }} /> Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <MailIcon sx={{ mr: 1 }} /> Messages
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListAltIcon sx={{ mr: 1 }} /> Tasks
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;