import React from "react";
import AppHeader from '../../Components/AdminComponents/AppBarHeader'
import Sidebar from '../../Components/AdminComponents/Sidebar'
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ChatWidget from "../../Components/ChatBot/ChatWidget";

const AdminLayout = () => {
  return (
    <>
      <AppHeader />
      <Box display="flex">
        <Sidebar /> 
        <Box component="main" flexGrow={1} mt={8} p={3}>
          <Outlet />
          <ChatWidget />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
