import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Stack,
  Chip,
  Divider,
  Avatar,
  IconButton,
  Paper,
  useTheme
} from "@mui/material";
import {
  Language as LanguageIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Close as CloseIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Work as WorkIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon
} from "@mui/icons-material";

const TabsPanel = ({ requiter, onClose }) => {
  const [tab, setTab] = useState(0);
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ 
        position: 'relative',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)' 
          : 'linear-gradient(135deg, #2a3a4a 0%, #1a2733 100%)',
        p: 3,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
      }}>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: 16,
            backgroundColor: 'rgba(255,255,255,0.2)'
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar 
            src={requiter.image} 
            sx={{ 
              width: 80, 
              height: 80,
              border: '3px solid white',
              boxShadow: theme.shadows[3]
            }} 
          />
          <Box>
            <Typography variant="h5" fontWeight="600">
              {requiter.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {requiter.position}
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <Chip 
                label="Recruiter" 
                size="small" 
                color="primary"
                sx={{ borderRadius: 1 }}
              />
              <Chip 
                label="Verified" 
                size="small" 
                sx={{ 
                  borderRadius: 1,
                  backgroundColor: theme.palette.success.light,
                  color: theme.palette.success.contrastText
                }} 
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box p={3}>
        <Tabs
          value={tab}
          onChange={(e, newTab) => setTab(newTab)}
          aria-label="tabs"
          sx={{
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: 3
            }
          }}
        >
          <Tab label="Overview" sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab label="Activities" sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab label="Emails" sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab label="Files" sx={{ textTransform: 'none', fontWeight: 600 }} />
        </Tabs>

        {tab === 0 && (
          <Box mt={3}>
            <Typography variant="subtitle1" fontWeight="600" gutterBottom>
              Contact Information
            </Typography>

            <Stack spacing={2} mb={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body1">
                  <Box component="span" color="text.secondary" mr={1}>Email:</Box>
                  {requiter.email}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="primary" />
                <Typography variant="body1">
                  <Box component="span" color="text.secondary" mr={1}>Phone:</Box>
                  {requiter.phone}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <WorkIcon color="primary" />
                <Typography variant="body1">
                  <Box component="span" color="text.secondary" mr={1}>Company:</Box>
                  {requiter.position}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <ScheduleIcon color="primary" />
                <Typography variant="body1">
                  <Box component="span" color="text.secondary" mr={1}>Applied:</Box>
                  {requiter.applied}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationIcon color="primary" />
                <Typography variant="body1">
                  <Box component="span" color="text.secondary" mr={1}>Source:</Box>
                  {requiter.from}
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle1" fontWeight="600" gutterBottom>
              Social Media
            </Typography>
            <Stack direction="row" spacing={3} mt={2}>
              <IconButton sx={{ backgroundColor: '#e3f2fd', color: '#2196f3' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#e3f2fd', color: '#2196f3' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#e3f2fd', color: '#2196f3' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#fce4ec', color: '#e91e63' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: '#e3f2fd', color: '#2196f3' }}>
                <LanguageIcon />
              </IconButton>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TabsPanel;