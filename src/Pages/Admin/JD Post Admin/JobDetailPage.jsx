import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper, Stack, Divider, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaidIcon from "@mui/icons-material/Paid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const dummyJobData = {
  1: {
    title: "Customer Growth & Marketing Analyst",
    datePosted: "11 Mar 2025",
    department: "Marketing",
    location: "Mumbai, India",
    workMode: "Hybrid",
    employmentType: "Full-Time",
    salary: "₹6 - ₹8 LPA",
    experience: "2-4 years",
    description:
      "As a Marketing Analyst, you will design, execute, and measure growth strategies to acquire and retain customers. You’ll collaborate across sales and product teams to align messaging and measure campaign success.",
    responsibilities: [
      "Create and manage multi-channel marketing campaigns.",
      "Track marketing KPIs to measure performance.",
      "Support customer segmentation and targeting.",
      "Perform competitive analysis and benchmarking.",
    ],
    skills: [
      "Google Analytics",
      "SEO & SEM",
      "CRM tools (Hubspot/Salesforce)",
      "Strong analytical mindset",
    ],
    benefits: [
      "Flexible working hours",
      "Health insurance",
      "Employee stock options",
      "Learning & development budget",
    ],
  },

  2: {
    title: "Frontend Developer ",
    datePosted: "11 Mar 2025",
    department: "Engineering",
    location: "Remote",
    workMode: "Remote",
    employmentType: "Full-Time",
    salary: "₹8 - ₹10 LPA",
    experience: "3-5 years",
    description:
      "As a Frontend Developer, your focus will be building pixel-perfect, accessible, and performant UI components while learning from mistakes and improving user experience continuously.",
    responsibilities: [
      "Develop responsive and accessible UI components using React.",
      "Collaborate with product and design teams to implement new features.",
      "Optimize application performance and load time.",
      "Write clean, maintainable, and testable code.",
    ],
    skills: [
      "React.js",
      "HTML, CSS, JavaScript (ES6+)",
      "REST APIs & Axios",
      "Git & Version Control",
    ],
    benefits: [
      "Remote-first team",
      "MacBook and accessories provided",
      "Wellness allowance",
      "Annual tech conference budget",
    ],
  },

  3: {
    title: "Product Analyst",
    datePosted: "11 Mar 2025",
    department: "Product",
    location: "Bangalore, India",
    workMode: "On-site",
    employmentType: "Full-Time",
    salary: "₹7 - ₹9 LPA",
    experience: "1-3 years",
    description:
      "The Product Analyst will work closely with product managers and engineers to provide insights through data analysis, influence product strategy, and help shape the product roadmap.",
    responsibilities: [
      "Analyze user behavior and product performance metrics.",
      "Define and monitor KPIs for key features.",
      "Conduct A/B testing and experiments.",
      "Translate data into actionable insights for the product team.",
    ],
    skills: [
      "SQL & Excel",
      "Data visualization tools (Tableau, Power BI)",
      "Product thinking",
      "Python/R for data analysis",
    ],
    benefits: [
      "Daily meals at campus",
      "Transport facility",
      "Annual bonuses",
      "Access to internal product training programs",
    ],
  },

  4: {
    title: "Legal Team Assistant",
    datePosted: "08 Mar 2025",
    department: "Legal",
    location: "Delhi, India",
    workMode: "On-site",
    employmentType: "Contract",
    salary: "₹4 - ₹6 LPA",
    experience: "0-2 years",
    description:
      "Join our legal team as an assistant, where you'll be helping with compliance, documentation, and administrative support to ensure the organization adheres to legal requirements.",
    responsibilities: [
      "Assist in drafting legal documents and agreements.",
      "Organize and maintain case files and records.",
      "Coordinate with internal departments for compliance.",
      "Support senior legal advisors in regulatory matters.",
    ],
    skills: [
      "Legal research skills",
      "MS Office (Word, Excel, Outlook)",
      "Attention to detail",
      "Time management",
    ],
    benefits: [
      "Performance bonuses",
      "Legal training programs",
      "Work-life balance support",
      "On-the-job mentorship",
    ],
  },

  5: {
    title: "Sustainability Specialist",
    datePosted: "06 Mar 2025",
    department: "Operations",
    location: "Pune, India",
    workMode: "Hybrid",
    employmentType: "Full-Time",
    salary: "₹5 - ₹7 LPA",
    experience: "2-3 years",
    description:
      "As a Sustainability Specialist, you’ll develop and implement eco-friendly strategies across operations and ensure environmental compliance with industry standards.",
    responsibilities: [
      "Conduct sustainability assessments and audits.",
      "Implement energy-saving and waste reduction initiatives.",
      "Develop ESG reports and sustainability disclosures.",
      "Engage with vendors to promote eco-friendly practices.",
    ],
    skills: [
      "Knowledge of environmental laws and regulations",
      "Project management",
      "Data analysis for sustainability metrics",
      "Excellent communication skills",
    ],
    benefits: [
      "Green office initiative perks",
      "Volunteer time off",
      "Annual eco-tour retreat",
      "Subsidized public transport",
    ],
  },
};


const JobDetailPage = () => {
  const { id } = useParams();
  const job = dummyJobData[id];

  if (!job) return <Typography sx={{ p: 3 }}>Job not found</Typography>;

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {job.title}
        </Typography>

        <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
          <Chip
            icon={<CalendarTodayIcon />}
            label={`Posted: ${job.datePosted}`}
          />
          <Chip icon={<BusinessCenterIcon />} label={job.department} />
          <Chip icon={<PlaceIcon />} label={job.location} />
          <Chip icon={<WorkIcon />} label={job.workMode} />
          <Chip icon={<PaidIcon />} label={job.salary} />
          <Chip
            icon={<CheckCircleIcon />}
            label={`${job.experience} Exp.`}
          />
          <Chip icon={<WorkIcon />} label={job.employmentType} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Job Description
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {job.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Key Responsibilities
        </Typography>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </li>
          ))}
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Required Skills
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {job.skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              color="primary"
            />
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Perks & Benefits
        </Typography>
        <ul>
          {job.benefits.map((benefit, index) => (
            <li key={index}>
              <Typography variant="body2" color="text.secondary">
                {benefit}
              </Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};
export default JobDetailPage;