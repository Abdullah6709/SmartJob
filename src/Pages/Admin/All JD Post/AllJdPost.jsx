import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TableContainer,
  Tooltip,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bangalore",
    experience: "2-4 Years",
    salary: "₹6,00,000",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    experience: "3-5 Years",
    salary: "₹8,00,000",
  },
  {
    id: 3,
    title: "HR Manager",
    department: "Human Resources",
    location: "Mumbai",
    experience: "5+ Years",
    salary: "₹10,00,000",
  },
];

const AllJdPost = () => {
  const [jobs, setJobs] = useState(mockJobs);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Navigate to edit form for job ID: ${id}`);
    // You can navigate using useNavigate from react-router-dom
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        All Job Descriptions
      </Typography>

      <Paper elevation={2}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job, index) => (
                <TableRow key={job.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.experience}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton
                        onClick={() => handleEdit(job.id)}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip> 
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDelete(job.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              {jobs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No job posts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AllJdPost;
