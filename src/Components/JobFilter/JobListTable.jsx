import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Typography, Box, Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const jobData = [
  { id: 1, title: 'Customer Growth & Marketing Analyst', date: '11 Mar 2025', candidates: 21, analytics: 'up' },
  { id: 2, title: 'Frontend Developer', date: '11 Mar 2025', candidates: 24, analytics: 'flat' },
  { id: 3, title: 'Product Analyst', date: '11 Mar 2025', candidates: 21, analytics: 'up' },
  { id: 4, title: 'Legal Team Assistant', date: '08 Mar 2025', candidates: 7, analytics: 'down' },
  { id: 5, title: 'Sustainability Specialist', date: '06 Mar 2025', candidates: 10, analytics: 'down' }
];

const JobListTable = () => {
  const navigate = useNavigate();

  const handleTitleClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Job Title</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Date Posted</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Candidates</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Analytics</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">Boost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobData.map((job) => (
            <TableRow key={job.id}>
              <TableCell>
                <Typography
                  fontWeight={500}
                  sx={{ cursor: 'pointer', color: 'primary.main' }}
                  onClick={() => handleTitleClick(job.id)}
                >
                  {job.title}
                </Typography>
              </TableCell>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.candidates} Candidates</TableCell>
              <TableCell>
                <BarChartIcon color={
                  job.analytics === 'up' ? 'success' :
                    job.analytics === 'down' ? 'error' :
                      'disabled'
                } />
              </TableCell>
              <TableCell align="right">
                <Chip icon={<RocketLaunchIcon />} label="Boost Job" color="primary" clickable />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobListTable;
