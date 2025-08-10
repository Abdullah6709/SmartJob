import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import JobTabs from "../../../Components/JobFilter/JobTabs";
import JobFilterBar from "../../../Components/JobFilter/JobFilterBar";
import JobListTable from "../../../Components/JobFilter/JobListTable";

const JobPostPage = () => {
  const navigate = useNavigate();

  const handleNewJobClick = () => {
    navigate("/jobpostbyadmin");
  };

  return (
    <Box p={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          JOBS
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewJobClick}>
          New Job
        </Button>
      </Stack>

      <JobTabs />
      <JobFilterBar />
      <JobListTable />
    </Box>
  );
};

export default JobPostPage;
