import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  Paper,
  useTheme
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const requiters = [
  {
    id: 1,
    name: "Alexander Christopher",
    position: "Addverb Technologies",
    applied: "5 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/150?img=1",
    email: "alex.christopher@gmail.com",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Joshua Matthew",
    position: "Dell Technologies",
    applied: "4 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/150?img=2",
    email: "joshuamatthew@gmail.com",
    phone: "+91 7852653210",
  },
  {
    id: 3,
    name: "Michael Joshua",
    position: "eClerx Solutions",
    applied: "4 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/150?img=3",
    email: "michael.joshua@gmail.com",
    phone: "+91 8521479632",
  },
  {
    id: 4,
    name: "Ramakrishna Pisarla",
    position: "NTT Data Services",
    applied: "5 days ago",
    from: "LinkedIn",
    image: "https://i.pravatar.cc/150?img=4",
    email: "ramakrishna.pisarla@gmail.com",
    phone: "+91 9948897812",
  },
  {
    id: 5,
    name: "Sophia Williams",
    position: "Oracle Corporation",
    applied: "3 days ago",
    from: "Referral",
    image: "https://i.pravatar.cc/150?img=5",
    email: "sophia.williams@oracle.com",
    phone: "+91 8765432109",
  },
  {
    id: 6,
    name: "Emma Johnson",
    position: "Tech Mahindra",
    applied: "2 days ago",
    from: "Job Portal",
    image: "https://i.pravatar.cc/150?img=6",
    email: "emma.johnson@techmahindra.com",
    phone: "+91 7654321098",
  },
];

const RequiterInnerList = ({ onSelect }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box p={3} pb={2}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Recruiter Contacts
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          {requiters.length} active recruiters in your network
        </Typography>
        
        <TextField
          fullWidth
          placeholder="Search recruiters..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: theme.palette.background.paper
            }
          }}
        />
      </Box>
      
      <List sx={{ p: 0 }}>
        {requiters.map((c) => (
          <React.Fragment key={c.id}>
            <ListItem
              button
              onClick={() => onSelect(c)}
              sx={{ 
                cursor: "pointer",
                px: 3,
                py: 2,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              <ListItemAvatar>
                <Avatar 
                  src={c.image} 
                  sx={{ 
                    width: 56, 
                    height: 56,
                    border: `2px solid ${theme.palette.primary.main}`
                  }} 
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="500">
                    {c.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography 
                      variant="body2" 
                      color="text.primary"
                      component="span"
                    >
                      {c.position}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      display="block"
                    >
                      Applied {c.applied} • Via {c.from}
                    </Typography>
                  </>
                }
                sx={{ ml: 2 }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
export default RequiterInnerList;