import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Avatar,
  IconButton,
  Divider,
  FormControl,
  InputLabel,
  Select,
  Chip,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  PhotoCamera,
  LinkedIn,
  Twitter,
  GitHub,
  Language,
  Work,
  School,
  LocationOn,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CreateRecruiter = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      designation: "",
      experience: "",
      status: "Active",
      avatar: null,
      hireDate: null,
      location: "",
      education: "",
      skills: [],
      bio: "",
      linkedin: "",
      twitter: "",
      github: "",
      website: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
      company: Yup.string().required("Company name is required"),
      industry: Yup.string().required("Industry is required"),
      designation: Yup.string().required("Designation is required"),
      experience: Yup.string().required("Experience is required"),
      status: Yup.string().required("Status is required"),
      location: Yup.string().required("Location is required"),
      education: Yup.string().required("Education is required"),
      bio: Yup.string().max(500, "Bio should not exceed 500 characters"),
      linkedin: Yup.string().url("Must be a valid URL"),
      twitter: Yup.string().url("Must be a valid URL"),
      github: Yup.string().url("Must be a valid URL"),
      website: Yup.string().url("Must be a valid URL"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Here you would typically send the data to your backend
    },
  });

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Hospitality",
    "Other",
  ];

  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Executive",
  ];

  const skillsOptions = [
    "Technical Recruitment",
    "Talent Acquisition",
    "Interviewing",
    "ATS",
    "Employer Branding",
    "Candidate Sourcing",
    "Negotiation",
    "Onboarding",
  ];

  const handleSkillsChange = (event) => {
    const {
      target: { value },
    } = event;
    formik.setFieldValue(
      "skills",
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Create New Recruiter Profile
        </Typography>

        <Card
          sx={{
            boxShadow: theme.shadows[4],
            borderRadius: "12px",
            overflow: "visible",
          }}
        >
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                {/* Profile Section */}
                <Grid size={{xs:12}}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Profile Information
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                </Grid>

                {/* Avatar Upload */}
                <Grid
                 size={{xs:12}}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <Avatar
                    src={
                      formik.values.avatar
                        ? URL.createObjectURL(formik.values.avatar)
                        : "/static/images/avatar/default.jpg"
                    }
                    sx={{
                      width: 100,
                      height: 100,
                      border: "3px solid",
                      borderColor: theme.palette.primary.main,
                    }}
                  />
                  <Box>
                    <IconButton
                      color="primary"
                      component="label"
                      sx={{
                        border: "1px dashed",
                        borderColor: theme.palette.divider,
                        borderRadius: "8px",
                        p: 1.5,
                      }}
                    >
                      <PhotoCamera sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        {formik.values.avatar ? "Change" : "Upload"} Photo
                      </Typography>
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "avatar",
                            event.currentTarget.files[0]
                          )
                        }
                      />
                    </IconButton>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{ mt: 1, display: "block" }}
                    >
                      Recommended size: 500x500px
                    </Typography>
                  </Box>
                </Grid>

                {/* Name Fields */}
                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName && Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                {/* Contact Information */}
                <Grid size={{xs:12}}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.touched.location && formik.errors.location
                    }
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <LocationOn
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* Professional Information */}
                <Grid size={{xs:12}}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Professional Information
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.company && Boolean(formik.errors.company)
                    }
                    helperText={formik.touched.company && formik.errors.company}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <Work
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    select
                    fullWidth
                    label="Industry"
                    name="industry"
                    value={formik.values.industry}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.industry && Boolean(formik.errors.industry)
                    }
                    helperText={
                      formik.touched.industry && formik.errors.industry
                    }
                    variant="outlined"
                    size="small"
                  >
                    {industries.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={formik.values.designation}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.designation &&
                      Boolean(formik.errors.designation)
                    }
                    helperText={
                      formik.touched.designation && formik.errors.designation
                    }
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    select
                    fullWidth
                    label="Experience Level"
                    name="experience"
                    value={formik.values.experience}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.experience &&
                      Boolean(formik.errors.experience)
                    }
                    helperText={
                      formik.touched.experience && formik.errors.experience
                    }
                    variant="outlined"
                    size="small"
                  >
                    {experienceLevels.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <DatePicker
                    label="Hire Date"
                    value={formik.values.hireDate}
                    onChange={(value) => formik.setFieldValue("hireDate", value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Status</InputLabel>
                    <Select
                      label="Status"
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.status && Boolean(formik.errors.status)
                      }
                    >
                      <MenuItem value="Active">
                        <Chip
                          label="Active"
                          color="success"
                          size="small"
                          sx={{ width: 80 }}
                        />
                      </MenuItem>
                      <MenuItem value="Inactive">
                        <Chip
                          label="Inactive"
                          color="error"
                          size="small"
                          sx={{ width: 80 }}
                        />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Skills */}
                <Grid size={{xs:12}}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Skills</InputLabel>
                    <Select
                      multiple
                      label="Skills"
                      name="skills"
                      value={formik.values.skills}
                      onChange={handleSkillsChange}
                      renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} size="small" />
                          ))}
                        </Box>
                      )}
                    >
                      {skillsOptions.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Education */}
                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Education"
                    name="education"
                    value={formik.values.education}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.education && Boolean(formik.errors.education)
                    }
                    helperText={
                      formik.touched.education && formik.errors.education
                    }
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <School
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* Bio */}
                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    helperText={formik.touched.bio && formik.errors.bio}
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    inputProps={{ maxLength: 500 }}
                  />
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ display: "block", textAlign: "right" }}
                  >
                    {formik.values.bio.length}/500
                  </Typography>
                </Grid>

                {/* Social Links */}
                <Grid size={{xs:12}}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Social Links
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="LinkedIn"
                    name="linkedin"
                    value={formik.values.linkedin}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.linkedin && Boolean(formik.errors.linkedin)
                    }
                    helperText={
                      formik.touched.linkedin && formik.errors.linkedin
                    }
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <LinkedIn
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Twitter"
                    name="twitter"
                    value={formik.values.twitter}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.twitter && Boolean(formik.errors.twitter)
                    }
                    helperText={formik.touched.twitter && formik.errors.twitter}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <Twitter
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="GitHub"
                    name="github"
                    value={formik.values.github}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.github && Boolean(formik.errors.github)
                    }
                    helperText={formik.touched.github && formik.errors.github}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <GitHub
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                <Grid size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    label="Website"
                    name="website"
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.website && Boolean(formik.errors.website)
                    }
                    helperText={formik.touched.website && formik.errors.website}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <Language
                          color="action"
                          sx={{ mr: 1, color: theme.palette.text.secondary }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* Form Actions */}
                <Grid size={{xs:12}}>
                  <Divider sx={{ mb: 3 }} />
                  <Box display="flex" justifyContent="flex-end" gap={2}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => formik.resetForm()}
                      sx={{ px: 4, borderRadius: "8px" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ px: 4, borderRadius: "8px" }}
                    >
                      Create Recruiter Profile
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default CreateRecruiter;