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
  Chip,
  Avatar,
  TextField,
  InputAdornment,
  Stack,
  useTheme,
  TablePagination
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Work as WorkIcon,
  LocationOn as LocationIcon,
  AttachMoney as SalaryIcon,
  Business as DepartmentIcon,
  Schedule as ExperienceIcon
} from "@mui/icons-material";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Bangalore",
    experience: "2-4 Years",
    salary: "₹6,00,000 - ₹8,00,000",
    type: "Full-time",
    status: "Active",
    applications: 24,
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    experience: "3-5 Years",
    salary: "₹8,00,000 - ₹10,00,000",
    type: "Full-time",
    status: "Active",
    applications: 18,
  },
  {
    id: 3,
    title: "HR Manager",
    department: "Human Resources",
    location: "Mumbai",
    experience: "5+ Years",
    salary: "₹10,00,000 - ₹12,00,000",
    type: "Full-time",
    status: "Active",
    applications: 12,
  },
  {
    id: 4,
    title: "UX Designer",
    department: "Design",
    location: "Delhi",
    experience: "3-6 Years",
    salary: "₹7,00,000 - ₹9,00,000",
    type: "Contract",
    status: "Active",
    applications: 15,
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Hyderabad",
    experience: "6-8 Years",
    salary: "₹15,00,000 - ₹18,00,000",
    type: "Full-time",
    status: "Draft",
    applications: 0,
  },
];

const AllJdPost = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Navigate to edit form for job ID: ${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, filteredJobs.length - page * rowsPerPage);

  return (
    <Box p={0}>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="space-between" 
        alignItems="center"
        mb={3}
        spacing={2}
      >
        <Typography variant="h5" fontWeight="bold">
          Job Descriptions
        </Typography>
        
        <Stack direction="row" spacing={2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search jobs..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              width: { xs: '100%', sm: 300 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: theme.palette.primary.dark
              }
            }}
          >
            New Job Post
          </Button>
        </Stack>
      </Stack>

      <Paper 
        elevation={0}
        sx={{
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'hidden'
        }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Job Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Experience</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Applications</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredJobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filteredJobs
              ).map((job) => (
                <TableRow 
                  key={job.id}
                  hover
                  sx={{ 
                    '&:last-child td': { borderBottom: 0 },
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar sx={{ 
                        bgcolor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                        width: 40, 
                        height: 40 
                      }}>
                        <WorkIcon fontSize="small" />
                      </Avatar>
                      <Box>
                        <Typography fontWeight="500">{job.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.type}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      icon={<DepartmentIcon fontSize="small" />}
                      label={job.department}
                      size="small"
                      sx={{ 
                        borderRadius: 1,
                        backgroundColor: theme.palette.grey[200]
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationIcon color="action" fontSize="small" />
                      <Typography>{job.location}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <ExperienceIcon color="action" fontSize="small" />
                      <Typography>{job.experience}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <SalaryIcon color="action" fontSize="small" />
                      <Typography>{job.salary}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={job.status}
                      size="small"
                      sx={{ 
                        borderRadius: 1,
                        backgroundColor: job.status === 'Active' 
                          ? theme.palette.success.light 
                          : theme.palette.warning.light,
                        color: job.status === 'Active' 
                          ? theme.palette.success.dark 
                          : theme.palette.warning.dark
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography 
                      fontWeight="500"
                      color={job.applications > 0 ? 'primary' : 'text.secondary'}
                    >
                      {job.applications}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => handleEdit(job.id)}
                          sx={{
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                              color: '#fff'
                            }
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => handleDelete(job.id)}
                          sx={{
                            backgroundColor: theme.palette.error.light,
                            color: theme.palette.error.main,
                            '&:hover': {
                              backgroundColor: theme.palette.error.main,
                              color: '#fff'
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}

              {filteredJobs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                    <Box textAlign="center">
                      <img 
                        src="/static/images/illustrations/no-data.svg" 
                        alt="No data" 
                        style={{ width: 150, opacity: 0.7, marginBottom: 2 }} 
                      />
                      <Typography variant="body1" color="text.secondary">
                        No job posts found
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredJobs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            '& .MuiTablePagination-toolbar': {
              minHeight: 56
            }
          }}
        />
      </Paper>
    </Box>
  );
};

export default AllJdPost;