import React from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  title: Yup.string().required("Job title is required"),
  jobType: Yup.string().required("Job type is required"),
  location: Yup.string().required("Location is required"),
  department: Yup.string().required("Department is required"),
  experience: Yup.string().required("Experience is required"),
  salary: Yup.string().required("Salary is required"),
  description: Yup.string().required("Description is required"),
});

const JobPostByAdmin = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      jobType: "",
      location: "",
      department: "",
      experience: "",
      salary: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
      // You can POST `values` to an API endpoint here
    },
  });

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          New Job Post
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="title"
                label="Job Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                name="jobType"
                label="Job Type"
                value={formik.values.jobType}
                onChange={formik.handleChange}
                error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                helperText={formik.touched.jobType && formik.errors.jobType}
              >
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="location"
                label="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="department"
                label="Department"
                value={formik.values.department}
                onChange={formik.handleChange}
                error={
                  formik.touched.department && Boolean(formik.errors.department)
                }
                helperText={
                  formik.touched.department && formik.errors.department
                }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="experience"
                label="Experience Required"
                value={formik.values.experience}
                onChange={formik.handleChange}
                error={
                  formik.touched.experience && Boolean(formik.errors.experience)
                }
                helperText={
                  formik.touched.experience && formik.errors.experience
                }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="salary"
                label="Salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                error={formik.touched.salary && Boolean(formik.errors.salary)}
                helperText={formik.touched.salary && formik.errors.salary}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="description"
                label="Job Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" color="primary">
                Post Job
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default JobPostByAdmin;
