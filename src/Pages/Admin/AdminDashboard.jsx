import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  Paper,
  Chip,
  LinearProgress,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Apps as AppsIcon,
  Chat as ChatIcon,
  Group as GroupIcon,
  Work as WorkIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  PersonAdd as PersonAddIcon,
  Notifications as NotificationsIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const summaryData = [
  {
    label: "Daily Visits",
    value: "8,457",
    icon: <VisibilityIcon fontSize="medium" />,
    color: "#4caf50",
    trend: "+12%",
  },
  {
    label: "Job Applications",
    value: "52,160",
    icon: <AppsIcon fontSize="medium" />,
    color: "#2196f3",
    trend: "+24%",
  },
  {
    label: "New Candidates",
    value: "3,752",
    icon: <PersonAddIcon fontSize="medium" />,
    color: "#9c27b0",
    trend: "+8%",
  },
  {
    label: "Active Jobs",
    value: "1,236",
    icon: <WorkIcon fontSize="medium" />,
    color: "#ff9800",
    trend: "+5%",
  },
];

const chartData = [
  { name: "Jan", applications: 4000, interviews: 2400, hires: 1200 },
  { name: "Feb", applications: 3000, interviews: 1398, hires: 900 },
  { name: "Mar", applications: 2000, interviews: 9800, hires: 2800 },
  { name: "Apr", applications: 2780, interviews: 3908, hires: 1500 },
  { name: "May", applications: 1890, interviews: 4800, hires: 1900 },
  { name: "Jun", applications: 2390, interviews: 3800, hires: 2100 },
  { name: "Jul", applications: 3490, interviews: 4300, hires: 2500 },
];

const jobStatusData = [
  { name: "Open", value: 400, color: "#4caf50" },
  { name: "Closed", value: 300, color: "#f44336" },
  { name: "On Hold", value: 200, color: "#ff9800" },
  { name: "Pending", value: 100, color: "#2196f3" },
];

const recentActivities = [
  {
    id: 1,
    title: "New candidate applied",
    description: "John Doe applied for Senior Developer position",
    time: "2 mins ago",
    icon: <PersonAddIcon color="primary" />,
  },
  {
    id: 2,
    title: "Interview scheduled",
    description: "Interview with Jane Smith for Product Manager",
    time: "1 hour ago",
    icon: <ScheduleIcon color="secondary" />,
  },
  {
    id: 3,
    title: "New job posted",
    description: "Posted new job for UX Designer",
    time: "3 hours ago",
    icon: <WorkIcon color="success" />,
  },
  {
    id: 4,
    title: "Application approved",
    description: "Application approved for Marketing Specialist",
    time: "1 day ago",
    icon: <CheckCircleIcon color="info" />,
  },
];

const topJobs = [
  {
    title: "Senior Software Engineer",
    applicants: 342,
    progress: 75,
    skills: ["React", "Node.js", "AWS"],
  },
  {
    title: "Product Manager",
    applicants: 198,
    progress: 60,
    skills: ["Agile", "Scrum", "Product Strategy"],
  },
  {
    title: "UX Designer",
    applicants: 156,
    progress: 45,
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    title: "Data Scientist",
    applicants: 127,
    progress: 30,
    skills: ["Python", "Machine Learning", "SQL"],
  },
];

const DashboardPage = () => {
  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Dashboard Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {summaryData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.05)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 56,
                      height: 56,
                      boxShadow: `0 4px 12px ${item.color}80`,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {item.value}
                      <Typography
                        component="span"
                        sx={{
                          ml: 1,
                          fontSize: "0.8rem",
                          color: item.color,
                          fontWeight: 600,
                        }}
                      >
                        {item.trend}
                      </Typography>
                    </Typography>
                    <Typography color="text.secondary">{item.label}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* Applications Chart */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="h6" fontWeight={600}>
                  Applications Overview
                </Typography>
                <Chip
                  icon={<TrendingUpIcon />}
                  label="24% increase"
                  color="success"
                  size="small"
                />
              </Stack>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#4caf50"
                    fill="#4caf50"
                    fillOpacity={0.2}
                  />
                  <Area
                    type="monotone"
                    dataKey="interviews"
                    stroke="#2196f3"
                    fill="#2196f3"
                    fillOpacity={0.2}
                  />
                  <Area
                    type="monotone"
                    dataKey="hires"
                    stroke="#9c27b0"
                    fill="#9c27b0"
                    fillOpacity={0.2}
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Status Pie Chart */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Job Status
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={jobStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {jobStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* Recent Activities */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Recent Activities
              </Typography>
              <Stack spacing={2}>
                {recentActivities.map((activity) => (
                  <Paper
                    key={activity.id}
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid #f0f0f0",
                      transition: "all 0.3s",
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Avatar sx={{ bgcolor: "transparent" }}>
                        {activity.icon}
                      </Avatar>
                      <Box>
                        <Typography fontWeight={600}>
                          {activity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {activity.description}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Jobs */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Top Jobs
              </Typography>
              <Stack spacing={3}>
                {topJobs.map((job, index) => (
                  <Box key={index}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={1}
                    >
                      <Typography fontWeight={600}>{job.title}</Typography>
                      <Typography color="text.secondary">
                        {job.applicants} applicants
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={job.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 1,
                        "& .MuiLinearProgress-bar": {
                          backgroundColor:
                            index % 2 === 0 ? "#4caf50" : "#2196f3",
                        },
                      }}
                    />
                    <Stack direction="row" spacing={1}>
                      {job.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Performance Metrics */}
      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Hiring Performance
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#4caf50" name="Applications" />
              <Bar dataKey="interviews" fill="#2196f3" name="Interviews" />
              <Bar dataKey="hires" fill="#9c27b0" name="Hires" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;
