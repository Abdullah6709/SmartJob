import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import BlockIcon from "@mui/icons-material/Block";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";

export const sidebarItems = [
  { label: "Dashboard", route: "/dashboard", icon: <DashboardIcon /> },
  { divider: true },
  { label: "All JD Posts", route: "/alljd", icon: <WorkIcon /> },
  { label: "JD Post", route: "/jdpost", icon: <PostAddIcon /> },
  { label: "JD Posted By Admin", route: "/jdpostadmin", icon: <WorkIcon /> },
  { divider: true },
  { label: "Recruiter List", route: "/recruiterlist", icon: <PeopleIcon /> },
  {
    label: "Active Recruiter",
    route: "/activerecruiter",
    icon: <PeopleIcon />,
  },
  {
    label: "Inactive Recruiter",
    route: "/deactiverecruiter",
    icon: <PeopleIcon />,
  },
  { label: "Blocked Recruiter", route: "/blockrecruiter", icon: <BlockIcon /> },
  {
    label: "Create Recruiter",
    route: "/createrecruiter",
    icon: <PersonAddIcon />,
  },
];
