import React from "react";
import { Box, Tabs, Tab, Badge } from "@mui/material";

const JobTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mb={2}>
      <Tabs 
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label={
            <Badge
              badgeContent={67}
              color="primary"
              sx={{ "& .MuiBadge-badge": { right: -2 } }}
            >
              <Box pr={2} fontWeight="bold">All Jobs</Box> 
            </Badge>
          }
        />
        <Tab
          label={
            <Badge
              badgeContent={10}
              color="default"
              sx={{ "& .MuiBadge-badge": { right: 0 } }}
            >
              <Box pr={2} fontWeight="bold">Mine</Box>
            </Badge>
          }
        />
        <Tab
          label={
            <Badge
              badgeContent={39}
              color="success"
              sx={{ "& .MuiBadge-badge": { right: -2 } }}
            >
              <Box pr={2} fontWeight="bold">Published</Box>
            </Badge>
          }
        />
        <Tab sx={{fontWeight:"bold"}} label="Drafts" />
      </Tabs>
    </Box>
  );
};

export default JobTabs;
