import React, { useState, useContext } from "react";
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
  Divider,
  useTheme,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { ThemeModeContext } from "../../../src/ThemeContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#4caf50",
    color: "#4caf50",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);

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
        bgcolor:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #212121 0%, #424242 100%)"
            : "linear-gradient(135deg, #3f51b5 0%, #283593 100%)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: (t) => t.zIndex.drawer + 1,
        backgroundImage:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #212121 0%, #424242 100%)"
            : "linear-gradient(135deg, #3f51b5 0%, #283593 100%)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: "0 24px",
          minHeight: "64px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.5px",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Admin Dashboard
        </Typography>

        <Box display="flex" alignItems="center" gap={3}>
          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.95)",
              borderRadius: 2,
              width: 300,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": {
                  borderColor: "rgba(0,0,0,0.1)",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    theme.palette.mode === "dark" ? "#90caf9" : "#3f51b5",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#90caf9" : "#5c6bc0",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Dark Mode Toggle */}
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          {/* Icon Buttons */}
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              color="inherit"
              size="large"
              sx={{
                position: "relative",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{ color: "#e3f2fd" }} />
              </Badge>
            </IconButton>

            <IconButton
              color="inherit"
              size="large"
              sx={{
                position: "relative",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <Badge badgeContent={3} color="error">
                <ListAltIcon sx={{ color: "#e3f2fd" }} />
              </Badge>
            </IconButton>

            <IconButton
              color="inherit"
              size="large"
              sx={{
                position: "relative",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <Badge badgeContent={7} color="error">
                <NotificationsIcon sx={{ color: "#e3f2fd" }} />
              </Badge>
            </IconButton>

            {/* Profile */}
            <Box display="flex" alignItems="center" sx={{ ml: 1 }}>
              <IconButton
                onClick={handleMenuOpen}
                sx={{
                  p: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                  },
                }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Admin User"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: 36,
                      height: 36,
                      border: "2px solid #e3f2fd",
                    }}
                  />
                </StyledBadge>
                <Typography
                  variant="subtitle2"
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Admin
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#e3f2fd" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                  elevation: 8,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    minWidth: 200,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                    "& .MuiMenuItem-root": {
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    },
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <AccountCircle sx={{ mr: 1, color: "#5c6bc0" }} />
                  <Typography variant="body2">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <MailIcon sx={{ mr: 1, color: "#5c6bc0" }} />
                  <Typography variant="body2">Messages</Typography>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListAltIcon sx={{ mr: 1, color: "#5c6bc0" }} />
                  <Typography variant="body2">Tasks</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Typography variant="body2" color="error">
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
